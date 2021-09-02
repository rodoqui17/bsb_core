"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Controller = void 0;

var _examples = _interopRequireDefault(require("../../services/examples.service"));

var _blockchain = _interopRequireDefault(require("../../services/blockchain.services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  createuserbani(req, res, error) {
    _blockchain.default.createuserbani(req.query.id, req.query.user, req.query.role, req.query.address).then(r => res.json(r));
  }

  store(req, res, error) {
    _blockchain.default.storeData(req.query.data_store, req.query.cuenta, req.query.llave).then(r => res.json(r));
  }

  registros(req, res) {
    _blockchain.default.getData().then(r => res.json(r));
  }

  getBlockNumber(req, res) {
    _blockchain.default.getBlockNumber().then(r => res.json(r));
  }

  byQuery(req, res) {
    _blockchain.default.all().then(r => res.json(' EL ID :  ' + req.query.id + ' pertenece a : ' + req.query.name));
  }

  byId(req, res) {
    _examples.default.byId(req.params.id).then(r => {
      if (r) res.json(r);else res.status(404).end();
    });
  }

  create(req, res) {
    _examples.default.create(req.body.name).then(r => res().status(201).location(`/api/v1/examples/${r.id}`).json(r));
  }

  create_account(req, res) {
    _blockchain.default.create_account().then(r => {
      if (r) res.json(r);else res.status(404).json(r);
    });
  }

  balance(req, res) {
    _blockchain.default.balance(req.params.address).then(r => res.json(r));
  }

  getTransaction(req, res) {
    _blockchain.default.getTransaction(req.params.tx).then(r => res.json(r));
  }

}

exports.Controller = Controller;

var _default = new Controller();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvZXhhbXBsZXMvY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiY3JlYXRldXNlcmJhbmkiLCJyZXEiLCJyZXMiLCJlcnJvciIsIkJsb2NrY2hhaW5TZXJ2aWNpZXMiLCJxdWVyeSIsImlkIiwidXNlciIsInJvbGUiLCJhZGRyZXNzIiwidGhlbiIsInIiLCJqc29uIiwic3RvcmUiLCJzdG9yZURhdGEiLCJkYXRhX3N0b3JlIiwiY3VlbnRhIiwibGxhdmUiLCJyZWdpc3Ryb3MiLCJnZXREYXRhIiwiZ2V0QmxvY2tOdW1iZXIiLCJieVF1ZXJ5IiwiYWxsIiwibmFtZSIsImJ5SWQiLCJFeGFtcGxlc1NlcnZpY2UiLCJwYXJhbXMiLCJzdGF0dXMiLCJlbmQiLCJjcmVhdGUiLCJib2R5IiwibG9jYXRpb24iLCJjcmVhdGVfYWNjb3VudCIsImJhbGFuY2UiLCJnZXRUcmFuc2FjdGlvbiIsInR4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFHTyxNQUFNQSxVQUFOLENBQWlCO0FBRXRCQyxFQUFBQSxjQUFjLENBQUNDLEdBQUQsRUFBS0MsR0FBTCxFQUFTQyxLQUFULEVBQWU7QUFDM0JDLHdCQUFvQkosY0FBcEIsQ0FBbUNDLEdBQUcsQ0FBQ0ksS0FBSixDQUFVQyxFQUE3QyxFQUFnREwsR0FBRyxDQUFDSSxLQUFKLENBQVVFLElBQTFELEVBQStETixHQUFHLENBQUNJLEtBQUosQ0FBVUcsSUFBekUsRUFBOEVQLEdBQUcsQ0FBQ0ksS0FBSixDQUFVSSxPQUF4RixFQUNDQyxJQURELENBQ01DLENBQUMsSUFBSVQsR0FBRyxDQUFDVSxJQUFKLENBQVNELENBQVQsQ0FEWDtBQUdEOztBQUVERSxFQUFBQSxLQUFLLENBQUNaLEdBQUQsRUFBTUMsR0FBTixFQUFVQyxLQUFWLEVBQWlCO0FBQ3BCQyx3QkFBb0JVLFNBQXBCLENBQThCYixHQUFHLENBQUNJLEtBQUosQ0FBVVUsVUFBeEMsRUFBbURkLEdBQUcsQ0FBQ0ksS0FBSixDQUFVVyxNQUE3RCxFQUFvRWYsR0FBRyxDQUFDSSxLQUFKLENBQVVZLEtBQTlFLEVBQ0NQLElBREQsQ0FDTUMsQ0FBQyxJQUFHVCxHQUFHLENBQUNVLElBQUosQ0FBU0QsQ0FBVCxDQURWO0FBR0Q7O0FBRURPLEVBQUFBLFNBQVMsQ0FBQ2pCLEdBQUQsRUFBTUMsR0FBTixFQUFXO0FBQ2xCRSx3QkFBb0JlLE9BQXBCLEdBQ0NULElBREQsQ0FDTUMsQ0FBQyxJQUFHVCxHQUFHLENBQUNVLElBQUosQ0FBU0QsQ0FBVCxDQURWO0FBRUQ7O0FBRURTLEVBQUFBLGNBQWMsQ0FBQ25CLEdBQUQsRUFBTUMsR0FBTixFQUFXO0FBQ3ZCRSx3QkFBb0JnQixjQUFwQixHQUNHVixJQURILENBQ1FDLENBQUMsSUFBSVQsR0FBRyxDQUFDVSxJQUFKLENBQVNELENBQVQsQ0FEYjtBQUVEOztBQUVEVSxFQUFBQSxPQUFPLENBQUNwQixHQUFELEVBQU1DLEdBQU4sRUFBVztBQUNoQkUsd0JBQW9Ca0IsR0FBcEIsR0FDR1osSUFESCxDQUNRQyxDQUFDLElBQUlULEdBQUcsQ0FBQ1UsSUFBSixDQUFTLGVBQWVYLEdBQUcsQ0FBQ0ksS0FBSixDQUFVQyxFQUF6QixHQUE4QixpQkFBOUIsR0FBa0RMLEdBQUcsQ0FBQ0ksS0FBSixDQUFVa0IsSUFBckUsQ0FEYjtBQUVEOztBQUVEQyxFQUFBQSxJQUFJLENBQUN2QixHQUFELEVBQU1DLEdBQU4sRUFBVztBQUNidUIsc0JBQ0dELElBREgsQ0FDUXZCLEdBQUcsQ0FBQ3lCLE1BQUosQ0FBV3BCLEVBRG5CLEVBRUdJLElBRkgsQ0FFUUMsQ0FBQyxJQUFJO0FBQ1QsVUFBSUEsQ0FBSixFQUFPVCxHQUFHLENBQUNVLElBQUosQ0FBU0QsQ0FBVCxFQUFQLEtBQ0tULEdBQUcsQ0FBQ3lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxHQUFoQjtBQUNOLEtBTEg7QUFNRDs7QUFFREMsRUFBQUEsTUFBTSxDQUFDNUIsR0FBRCxFQUFNQyxHQUFOLEVBQVc7QUFDZnVCLHNCQUNHSSxNQURILENBQ1U1QixHQUFHLENBQUM2QixJQUFKLENBQVNQLElBRG5CLEVBRUdiLElBRkgsQ0FFUUMsQ0FBQyxJQUFJVCxHQUFHLEdBQ1h5QixNQURRLENBQ0QsR0FEQyxFQUVSSSxRQUZRLENBRUUsb0JBQW1CcEIsQ0FBQyxDQUFDTCxFQUFHLEVBRjFCLEVBR1JNLElBSFEsQ0FHSEQsQ0FIRyxDQUZiO0FBTUQ7O0FBRURxQixFQUFBQSxjQUFjLENBQUMvQixHQUFELEVBQU1DLEdBQU4sRUFBVztBQUN2QkUsd0JBQW9CNEIsY0FBcEIsR0FDR3RCLElBREgsQ0FDUUMsQ0FBQyxJQUFJO0FBQ1QsVUFBSUEsQ0FBSixFQUFPVCxHQUFHLENBQUNVLElBQUosQ0FBU0QsQ0FBVCxFQUFQLEtBQ0tULEdBQUcsQ0FBQ3lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCZixJQUFoQixDQUFxQkQsQ0FBckI7QUFDTixLQUpIO0FBS0Q7O0FBRURzQixFQUFBQSxPQUFPLENBQUNoQyxHQUFELEVBQU1DLEdBQU4sRUFBVztBQUNoQkUsd0JBQW9CNkIsT0FBcEIsQ0FBNEJoQyxHQUFHLENBQUN5QixNQUFKLENBQVdqQixPQUF2QyxFQUNHQyxJQURILENBQ1FDLENBQUMsSUFBSVQsR0FBRyxDQUFDVSxJQUFKLENBQVNELENBQVQsQ0FEYjtBQUVEOztBQUVEdUIsRUFBQUEsY0FBYyxDQUFDakMsR0FBRCxFQUFNQyxHQUFOLEVBQVc7QUFDdkJFLHdCQUFvQjhCLGNBQXBCLENBQW1DakMsR0FBRyxDQUFDeUIsTUFBSixDQUFXUyxFQUE5QyxFQUNHekIsSUFESCxDQUNRQyxDQUFDLElBQUlULEdBQUcsQ0FBQ1UsSUFBSixDQUFTRCxDQUFULENBRGI7QUFHRDs7QUFoRXFCOzs7O2VBa0VULElBQUlaLFVBQUosRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlc1NlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvZXhhbXBsZXMuc2VydmljZSc7XG5pbXBvcnQgQmxvY2tjaGFpblNlcnZpY2llcyBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ibG9ja2NoYWluLnNlcnZpY2VzJztcblxuXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XG5cbiAgY3JlYXRldXNlcmJhbmkocmVxLHJlcyxlcnJvcil7XG4gICAgQmxvY2tjaGFpblNlcnZpY2llcy5jcmVhdGV1c2VyYmFuaShyZXEucXVlcnkuaWQscmVxLnF1ZXJ5LnVzZXIscmVxLnF1ZXJ5LnJvbGUscmVxLnF1ZXJ5LmFkZHJlc3MpXG4gICAgLnRoZW4ociA9PiByZXMuanNvbihyKSk7XG5cbiAgfVxuXG4gIHN0b3JlKHJlcSwgcmVzLGVycm9yKSB7XG4gICAgQmxvY2tjaGFpblNlcnZpY2llcy5zdG9yZURhdGEocmVxLnF1ZXJ5LmRhdGFfc3RvcmUscmVxLnF1ZXJ5LmN1ZW50YSxyZXEucXVlcnkubGxhdmUpXG4gICAgLnRoZW4ocj0+IHJlcy5qc29uKHIpKTtcbiAgXG4gIH1cblxuICByZWdpc3Ryb3MocmVxLCByZXMpIHtcbiAgICBCbG9ja2NoYWluU2VydmljaWVzLmdldERhdGEoKVxuICAgIC50aGVuKHI9PiByZXMuanNvbihyKSk7XG4gIH1cblxuICBnZXRCbG9ja051bWJlcihyZXEsIHJlcykge1xuICAgIEJsb2NrY2hhaW5TZXJ2aWNpZXMuZ2V0QmxvY2tOdW1iZXIoKVxuICAgICAgLnRoZW4ociA9PiByZXMuanNvbihyKSk7XG4gIH1cblxuICBieVF1ZXJ5KHJlcSwgcmVzKSB7XG4gICAgQmxvY2tjaGFpblNlcnZpY2llcy5hbGwoKVxuICAgICAgLnRoZW4ociA9PiByZXMuanNvbignIEVMIElEIDogICcgKyByZXEucXVlcnkuaWQgKyAnIHBlcnRlbmVjZSBhIDogJyArIHJlcS5xdWVyeS5uYW1lKSk7XG4gIH1cblxuICBieUlkKHJlcSwgcmVzKSB7XG4gICAgRXhhbXBsZXNTZXJ2aWNlXG4gICAgICAuYnlJZChyZXEucGFyYW1zLmlkKVxuICAgICAgLnRoZW4ociA9PiB7XG4gICAgICAgIGlmIChyKSByZXMuanNvbihyKTtcbiAgICAgICAgZWxzZSByZXMuc3RhdHVzKDQwNCkuZW5kKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZShyZXEsIHJlcykge1xuICAgIEV4YW1wbGVzU2VydmljZVxuICAgICAgLmNyZWF0ZShyZXEuYm9keS5uYW1lKVxuICAgICAgLnRoZW4ociA9PiByZXMoKVxuICAgICAgICAuc3RhdHVzKDIwMSlcbiAgICAgICAgLmxvY2F0aW9uKGAvYXBpL3YxL2V4YW1wbGVzLyR7ci5pZH1gKVxuICAgICAgICAuanNvbihyKSk7XG4gIH1cblxuICBjcmVhdGVfYWNjb3VudChyZXEsIHJlcykge1xuICAgIEJsb2NrY2hhaW5TZXJ2aWNpZXMuY3JlYXRlX2FjY291bnQoKVxuICAgICAgLnRoZW4ociA9PiB7XG4gICAgICAgIGlmIChyKSByZXMuanNvbihyKTtcbiAgICAgICAgZWxzZSByZXMuc3RhdHVzKDQwNCkuanNvbihyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYmFsYW5jZShyZXEsIHJlcykge1xuICAgIEJsb2NrY2hhaW5TZXJ2aWNpZXMuYmFsYW5jZShyZXEucGFyYW1zLmFkZHJlc3MpXG4gICAgICAudGhlbihyID0+IHJlcy5qc29uKHIpKTtcbiAgfVxuXG4gIGdldFRyYW5zYWN0aW9uKHJlcSwgcmVzKSB7XG4gICAgQmxvY2tjaGFpblNlcnZpY2llcy5nZXRUcmFuc2FjdGlvbihyZXEucGFyYW1zLnR4KVxuICAgICAgLnRoZW4ociA9PiByZXMuanNvbihyKSk7XG5cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnRyb2xsZXIoKTtcbiJdfQ==