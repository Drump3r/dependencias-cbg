'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var generate_uuid=exports.generate_uuid=function(){return'xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(d){var e=0|16*Math.random(),f='x'===d?e:8|3&e;return f.toString(16)})},get_safe_html_uuid=exports.get_safe_html_uuid=function(){for(var d=generate_uuid();!d.match(/^[a-zA-Z].*/);)d=generate_uuid();return d},generate_hash=exports.generate_hash=function(d){var e=0,f=void 0,g;if(0===d.length)return e;for(f=0;f<d.length;f++)g=d.charCodeAt(f),e=(e<<5)-e+g,e|=0;return e},object_to_key=exports.object_to_key=function(d){return d?generate_hash(Object.values(d).reduce(function(e,f){return''+f+e})):''},constants=exports.constants={DEFAULT_CLASS_NAME:'react-blueimp',REACT_MIME_TYPE:'text/react'};
//# sourceMappingURL=utils.js.map