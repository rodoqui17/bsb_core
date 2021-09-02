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

var _default = express.Router().post('/', _controller.default.create).post('/store/:data_store', _controller.default.store).get('/registros', _controller.default.registros).post('/query', _controller.default.store).get('/address', _controller.default.create_account).get('/get_transaction/:tx', _controller.default.getTransaction).get('/get_balance/:address', _controller.default.balance);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvZXhhbXBsZXMvc21yb3V0ZXIuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsIlJvdXRlciIsInBvc3QiLCJjb250cm9sbGVyIiwiY3JlYXRlIiwic3RvcmUiLCJnZXQiLCJyZWdpc3Ryb3MiLCJjcmVhdGVfYWNjb3VudCIsImdldFRyYW5zYWN0aW9uIiwiYmFsYW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztlQUVlQSxPQUFPLENBQ25CQyxNQURZLEdBRVpDLElBRlksQ0FFUCxHQUZPLEVBRUZDLG9CQUFXQyxNQUZULEVBR1pGLElBSFksQ0FHUCxvQkFITyxFQUdlQyxvQkFBV0UsS0FIMUIsRUFJWkMsR0FKWSxDQUlSLFlBSlEsRUFJTUgsb0JBQVdJLFNBSmpCLEVBS1pMLElBTFksQ0FLUCxRQUxPLEVBS0dDLG9CQUFXRSxLQUxkLEVBTVpDLEdBTlksQ0FNUixVQU5RLEVBTUlILG9CQUFXSyxjQU5mLEVBT1pGLEdBUFksQ0FPUixzQkFQUSxFQU9nQkgsb0JBQVdNLGNBUDNCLEVBUVpILEdBUlksQ0FRUix1QkFSUSxFQVFpQkgsb0JBQVdPLE9BUjVCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZXhwcmVzc1xuICAuUm91dGVyKClcbiAgLnBvc3QoJy8nLCBjb250cm9sbGVyLmNyZWF0ZSlcbiAgLnBvc3QoJy9zdG9yZS86ZGF0YV9zdG9yZScsIGNvbnRyb2xsZXIuc3RvcmUpXG4gIC5nZXQoJy9yZWdpc3Ryb3MnLCBjb250cm9sbGVyLnJlZ2lzdHJvcylcbiAgLnBvc3QoJy9xdWVyeScsIGNvbnRyb2xsZXIuc3RvcmUpXG4gIC5nZXQoJy9hZGRyZXNzJywgY29udHJvbGxlci5jcmVhdGVfYWNjb3VudClcbiAgLmdldCgnL2dldF90cmFuc2FjdGlvbi86dHgnLCBjb250cm9sbGVyLmdldFRyYW5zYWN0aW9uKVxuICAuZ2V0KCcvZ2V0X2JhbGFuY2UvOmFkZHJlc3MnLCBjb250cm9sbGVyLmJhbGFuY2UpO1xuICAgXG4iXX0=