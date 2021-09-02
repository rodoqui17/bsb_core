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

var _default = express.Router().post('/', _controller.default.create).post('/store/:data_store', _controller.default.store).get('/registros', _controller.default.registros).get('/query', _controller.default.byQuery).get('/address', _controller.default.create_account).get('/get_transaction/:tx', _controller.default.getTransaction).get('/get_balance/:address', _controller.default.balance);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvZXhhbXBsZXMvbmZ0cm91dGVyLmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJSb3V0ZXIiLCJwb3N0IiwiY29udHJvbGxlciIsImNyZWF0ZSIsInN0b3JlIiwiZ2V0IiwicmVnaXN0cm9zIiwiYnlRdWVyeSIsImNyZWF0ZV9hY2NvdW50IiwiZ2V0VHJhbnNhY3Rpb24iLCJiYWxhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O2VBRWVBLE9BQU8sQ0FDbkJDLE1BRFksR0FFWkMsSUFGWSxDQUVQLEdBRk8sRUFFRkMsb0JBQVdDLE1BRlQsRUFHWkYsSUFIWSxDQUdQLG9CQUhPLEVBR2VDLG9CQUFXRSxLQUgxQixFQUlaQyxHQUpZLENBSVIsWUFKUSxFQUlNSCxvQkFBV0ksU0FKakIsRUFLWkQsR0FMWSxDQUtSLFFBTFEsRUFLRUgsb0JBQVdLLE9BTGIsRUFNWkYsR0FOWSxDQU1SLFVBTlEsRUFNSUgsb0JBQVdNLGNBTmYsRUFPWkgsR0FQWSxDQU9SLHNCQVBRLEVBT2dCSCxvQkFBV08sY0FQM0IsRUFRWkosR0FSWSxDQVFSLHVCQVJRLEVBUWlCSCxvQkFBV1EsT0FSNUIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuXG5leHBvcnQgZGVmYXVsdCBleHByZXNzXG4gIC5Sb3V0ZXIoKVxuICAucG9zdCgnLycsIGNvbnRyb2xsZXIuY3JlYXRlKVxuICAucG9zdCgnL3N0b3JlLzpkYXRhX3N0b3JlJywgY29udHJvbGxlci5zdG9yZSlcbiAgLmdldCgnL3JlZ2lzdHJvcycsIGNvbnRyb2xsZXIucmVnaXN0cm9zKVxuICAuZ2V0KCcvcXVlcnknLCBjb250cm9sbGVyLmJ5UXVlcnkpXG4gIC5nZXQoJy9hZGRyZXNzJywgY29udHJvbGxlci5jcmVhdGVfYWNjb3VudClcbiAgLmdldCgnL2dldF90cmFuc2FjdGlvbi86dHgnLCBjb250cm9sbGVyLmdldFRyYW5zYWN0aW9uKVxuICAuZ2V0KCcvZ2V0X2JhbGFuY2UvOmFkZHJlc3MnLCBjb250cm9sbGVyLmJhbGFuY2UpO1xuICAgXG4iXX0=