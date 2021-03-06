'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addHook;

var _hook = require('./hook');

var _hook2 = _interopRequireDefault(_hook);

var _compiler = require('./compiler');

var _compiler2 = _interopRequireDefault(_compiler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function addHook() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      name = _ref.name,
      extensions = _ref.extensions,
      options = _objectWithoutProperties(_ref, ['name', 'extensions']);

  extensions = (extensions || []).map(function (ext) {
    return ext.replace('.', '');
  });
  extensions.forEach(function (ext) {
    return (0, _hook2.default)('.' + ext, (0, _compiler2.default)(name, options));
  });
}
module.exports = exports['default'];