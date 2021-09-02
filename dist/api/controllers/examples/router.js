"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var express = _interopRequireWildcard(require("express"));

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = express.Router().post('/', _controller.default.create).get('/', _controller.default.getBlockNumber).get('/get_block', _controller.default.getBlockNumber).get('/query', _controller.default.byQuery).get('/address', _controller.default.create_account).get('/get_transaction/:tx', _controller.default.getTransaction).post('/get_balance/:address', _controller.default.balance);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvZXhhbXBsZXMvcm91dGVyLmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJSb3V0ZXIiLCJwb3N0IiwiY29udHJvbGxlciIsImNyZWF0ZSIsImdldCIsImdldEJsb2NrTnVtYmVyIiwiYnlRdWVyeSIsImNyZWF0ZV9hY2NvdW50IiwiZ2V0VHJhbnNhY3Rpb24iLCJiYWxhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O2VBRWVBLE9BQU8sQ0FDbkJDLE1BRFksR0FFWkMsSUFGWSxDQUVQLEdBRk8sRUFFRkMsb0JBQVdDLE1BRlQsRUFHWkMsR0FIWSxDQUdSLEdBSFEsRUFHSEYsb0JBQVdHLGNBSFIsRUFJWkQsR0FKWSxDQUlSLFlBSlEsRUFJTUYsb0JBQVdHLGNBSmpCLEVBS1pELEdBTFksQ0FLUixRQUxRLEVBS0VGLG9CQUFXSSxPQUxiLEVBTVpGLEdBTlksQ0FNUixVQU5RLEVBTUlGLG9CQUFXSyxjQU5mLEVBT1pILEdBUFksQ0FPUixzQkFQUSxFQU9nQkYsb0JBQVdNLGNBUDNCLEVBUVpQLElBUlksQ0FRUCx1QkFSTyxFQVFrQkMsb0JBQVdPLE9BUjdCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZXhwcmVzc1xuICAuUm91dGVyKClcbiAgLnBvc3QoJy8nLCBjb250cm9sbGVyLmNyZWF0ZSlcbiAgLmdldCgnLycsIGNvbnRyb2xsZXIuZ2V0QmxvY2tOdW1iZXIpXG4gIC5nZXQoJy9nZXRfYmxvY2snLCBjb250cm9sbGVyLmdldEJsb2NrTnVtYmVyKVxuICAuZ2V0KCcvcXVlcnknLCBjb250cm9sbGVyLmJ5UXVlcnkpXG4gIC5nZXQoJy9hZGRyZXNzJywgY29udHJvbGxlci5jcmVhdGVfYWNjb3VudClcbiAgLmdldCgnL2dldF90cmFuc2FjdGlvbi86dHgnLCBjb250cm9sbGVyLmdldFRyYW5zYWN0aW9uKVxuICAucG9zdCgnL2dldF9iYWxhbmNlLzphZGRyZXNzJywgY29udHJvbGxlci5iYWxhbmNlKTtcbiAgIFxuIl19