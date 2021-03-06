"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _events = require("events");

var _writableTrackingBuffer = _interopRequireDefault(require("./tracking-buffer/writable-tracking-buffer"));

var _readableStream = require("readable-stream");

var _token = require("./token/token");

var _message = _interopRequireDefault(require("./message"));

var _packet = require("./packet");

var _errors = require("./errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

const FLAGS = {
  nullable: 1 << 0,
  caseSen: 1 << 1,
  updateableReadWrite: 1 << 2,
  updateableUnknown: 1 << 3,
  identity: 1 << 4,
  computed: 1 << 5,
  // introduced in TDS 7.2
  fixedLenCLRType: 1 << 8,
  // introduced in TDS 7.2
  sparseColumnSet: 1 << 10,
  // introduced in TDS 7.3.B
  hidden: 1 << 13,
  // introduced in TDS 7.2
  key: 1 << 14,
  // introduced in TDS 7.2
  nullableUnknown: 1 << 15 // introduced in TDS 7.2

};
const DONE_STATUS = {
  FINAL: 0x00,
  MORE: 0x1,
  ERROR: 0x2,
  INXACT: 0x4,
  COUNT: 0x10,
  ATTN: 0x20,
  SRVERROR: 0x100
};

// A transform that converts rows to packets.
class RowTransform extends _readableStream.Transform {
  constructor(bulkLoad) {
    super({
      writableObjectMode: true
    });
    this.columnMetadataWritten = void 0;
    this.bulkLoad = void 0;
    this.mainOptions = void 0;
    this.columns = void 0;
    this.bulkLoad = bulkLoad;
    this.mainOptions = bulkLoad.options;
    this.columns = bulkLoad.columns;
    this.columnMetadataWritten = false;
  }

  _transform(row, _encoding, callback) {
    if (!this.columnMetadataWritten) {
      this.push(this.bulkLoad.getColMetaData());
      this.columnMetadataWritten = true;
    }

    const buf = new _writableTrackingBuffer.default(64, 'ucs2', true);
    buf.writeUInt8(_token.TYPE.ROW);
    this.push(buf.data);

    for (let i = 0; i < this.columns.length; i++) {
      const c = this.columns[i];
      const parameter = {
        length: c.length,
        scale: c.scale,
        precision: c.precision,
        value: row[i]
      };

      var _iterator = _createForOfIteratorHelper(c.type.generateParameterData(parameter, this.mainOptions)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          const chunk = _step.value;
          this.push(chunk);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    process.nextTick(callback);
  }

  _flush(callback) {
    this.push(this.bulkLoad.createDoneToken());
    process.nextTick(callback);
  }

}

class BulkLoad extends _events.EventEmitter {
  constructor(table, connectionOptions, {
    checkConstraints = false,
    fireTriggers = false,
    keepNulls = false,
    lockTable = false
  }, callback) {
    if (typeof checkConstraints !== 'boolean') {
      throw new TypeError('The "options.checkConstraints" property must be of type boolean.');
    }

    if (typeof fireTriggers !== 'boolean') {
      throw new TypeError('The "options.fireTriggers" property must be of type boolean.');
    }

    if (typeof keepNulls !== 'boolean') {
      throw new TypeError('The "options.keepNulls" property must be of type boolean.');
    }

    if (typeof lockTable !== 'boolean') {
      throw new TypeError('The "options.lockTable" property must be of type boolean.');
    }

    super();
    this.error = void 0;
    this.canceled = void 0;
    this.executionStarted = void 0;
    this.streamingMode = void 0;
    this.table = void 0;
    this.connection = void 0;
    this.timeout = void 0;
    this.rows = void 0;
    this.rst = void 0;
    this.rowCount = void 0;
    this.paused = void 0;
    this.options = void 0;
    this.callback = void 0;
    this.columns = void 0;
    this.columnsByName = void 0;
    this.firstRowWritten = void 0;
    this.rowToPacketTransform = void 0;
    this.bulkOptions = void 0;
    this.error = undefined;
    this.canceled = false;
    this.executionStarted = false;
    this.table = table;
    this.options = connectionOptions;
    this.callback = callback;
    this.columns = [];
    this.columnsByName = {};
    this.firstRowWritten = false;
    this.streamingMode = false;
    this.rowToPacketTransform = new RowTransform(this); // eslint-disable-line no-use-before-define

    this.bulkOptions = {
      checkConstraints,
      fireTriggers,
      keepNulls,
      lockTable
    };
  }

  addColumn(name, type, {
    output = false,
    length,
    precision,
    scale,
    objName = name,
    nullable = true
  }) {
    if (this.firstRowWritten) {
      throw new Error('Columns cannot be added to bulk insert after the first row has been written.');
    }

    if (this.executionStarted) {
      throw new Error('Columns cannot be added to bulk insert after execution has started.');
    }

    const column = {
      type: type,
      name: name,
      value: null,
      output: output,
      length: length,
      precision: precision,
      scale: scale,
      objName: objName,
      nullable: nullable
    };

    if ((type.id & 0x30) === 0x20) {
      if (column.length == null && type.resolveLength) {
        column.length = type.resolveLength(column);
      }
    }

    if (type.resolvePrecision && column.precision == null) {
      column.precision = type.resolvePrecision(column);
    }

    if (type.resolveScale && column.scale == null) {
      column.scale = type.resolveScale(column);
    }

    this.columns.push(column);
    this.columnsByName[name] = column;
  }

  addRow(...input) {
    this.firstRowWritten = true;
    let row;

    if (input.length > 1 || !input[0] || typeof input[0] !== 'object') {
      row = input;
    } else {
      row = input[0];
    } // write each column


    if (Array.isArray(row)) {
      this.rowToPacketTransform.write(row);
    } else {
      const object = row;
      this.rowToPacketTransform.write(this.columns.map(column => {
        return object[column.objName];
      }));
    }
  }

  getOptionsSql() {
    const addOptions = [];

    if (this.bulkOptions.checkConstraints) {
      addOptions.push('CHECK_CONSTRAINTS');
    }

    if (this.bulkOptions.fireTriggers) {
      addOptions.push('FIRE_TRIGGERS');
    }

    if (this.bulkOptions.keepNulls) {
      addOptions.push('KEEP_NULLS');
    }

    if (this.bulkOptions.lockTable) {
      addOptions.push('TABLOCK');
    }

    if (addOptions.length > 0) {
      return ` WITH (${addOptions.join(',')})`;
    } else {
      return '';
    }
  }

  getBulkInsertSql() {
    let sql = 'insert bulk ' + this.table + '(';

    for (let i = 0, len = this.columns.length; i < len; i++) {
      const c = this.columns[i];

      if (i !== 0) {
        sql += ', ';
      }

      sql += '[' + c.name + '] ' + c.type.declaration(c);
    }

    sql += ')';
    sql += this.getOptionsSql();
    return sql;
  }

  getTableCreationSql() {
    let sql = 'CREATE TABLE ' + this.table + '(\n';

    for (let i = 0, len = this.columns.length; i < len; i++) {
      const c = this.columns[i];

      if (i !== 0) {
        sql += ',\n';
      }

      sql += '[' + c.name + '] ' + c.type.declaration(c);

      if (c.nullable !== undefined) {
        sql += ' ' + (c.nullable ? 'NULL' : 'NOT NULL');
      }
    }

    sql += '\n)';
    return sql;
  }

  getColMetaData() {
    const tBuf = new _writableTrackingBuffer.default(100, null, true); // TokenType

    tBuf.writeUInt8(_token.TYPE.COLMETADATA); // Count

    tBuf.writeUInt16LE(this.columns.length);

    for (let j = 0, len = this.columns.length; j < len; j++) {
      const c = this.columns[j]; // UserType

      if (this.options.tdsVersion < '7_2') {
        tBuf.writeUInt16LE(0);
      } else {
        tBuf.writeUInt32LE(0);
      } // Flags


      let flags = FLAGS.updateableReadWrite;

      if (c.nullable) {
        flags |= FLAGS.nullable;
      } else if (c.nullable === undefined && this.options.tdsVersion >= '7_2') {
        flags |= FLAGS.nullableUnknown;
      }

      tBuf.writeUInt16LE(flags); // TYPE_INFO

      tBuf.writeBuffer(c.type.generateTypeInfo(c, this.options)); // ColName

      tBuf.writeBVarchar(c.name, 'ucs2');
    }

    return tBuf.data;
  }

  setTimeout(timeout) {
    this.timeout = timeout;
  }

  createDoneToken() {
    // It might be nice to make DoneToken a class if anything needs to create them, but for now, just do it here
    const tBuf = new _writableTrackingBuffer.default(this.options.tdsVersion < '7_2' ? 9 : 13);
    tBuf.writeUInt8(_token.TYPE.DONE);
    const status = DONE_STATUS.FINAL;
    tBuf.writeUInt16LE(status);
    tBuf.writeUInt16LE(0); // CurCmd (TDS ignores this)

    tBuf.writeUInt32LE(0); // row count - doesn't really matter

    if (this.options.tdsVersion >= '7_2') {
      tBuf.writeUInt32LE(0); // row count is 64 bits in >= TDS 7.2
    }

    return tBuf.data;
  } // This method switches the BulkLoad object into streaming mode and returns
  // a stream.Writable for streaming rows to the server.


  getRowStream() {
    if (this.firstRowWritten) {
      throw new Error('BulkLoad cannot be switched to streaming mode after first row has been written using addRow().');
    }

    if (this.executionStarted) {
      throw new Error('BulkLoad cannot be switched to streaming mode after execution has started.');
    }

    this.streamingMode = true;
    return this.rowToPacketTransform;
  }

  getMessageStream() {
    const message = new _message.default({
      type: _packet.TYPE.BULK_LOAD
    });
    this.rowToPacketTransform.pipe(message);
    this.rowToPacketTransform.once('finish', () => {
      this.removeListener('cancel', onCancel);
    });

    const onCancel = () => {
      this.rowToPacketTransform.emit('error', (0, _errors.RequestError)('Canceled.', 'ECANCEL'));
      this.rowToPacketTransform.destroy();
    };

    this.once('cancel', onCancel);
    return message;
  }

  cancel() {
    if (this.canceled) {
      return;
    }

    this.canceled = true;
    this.emit('cancel');
  }

}

var _default = BulkLoad;
exports.default = _default;
module.exports = BulkLoad;