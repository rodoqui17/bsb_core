"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var path = _interopRequireWildcard(require("path"));

var bodyParser = _interopRequireWildcard(require("body-parser"));

var http = _interopRequireWildcard(require("http"));

var os = _interopRequireWildcard(require("os"));

var _logger = _interopRequireDefault(require("./logger"));

var _swagger = _interopRequireDefault(require("./swagger"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _express.default();

class ExpressServer {
  constructor() {
    const root = path.normalize(`${__dirname}/../..`);
    app.use(bodyParser.json({
      limit: process.env.REQUEST_LIMIT || '100kb'
    }));
    app.use(bodyParser.urlencoded({
      extended: true,
      limit: process.env.REQUEST_LIMIT || '100kb'
    }));
    app.use(bodyParser.text({
      limit: process.env.REQUEST_LIMIT || '100kb'
    }));
    app.use((0, _cookieParser.default)(process.env.SESSION_SECRET));
    app.use(_express.default.static(`${root}/public`));
  }

  router(routes) {
    this.routes = routes;
    return this;
  }

  listen(port = process.env.PORT) {
    const welcome = p => () => _logger.default.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname()} on port: ${p}}`);

    (0, _swagger.default)(app, this.routes).then(() => {
      http.createServer(app).listen(port, welcome(port));
    }).catch(e => {
      _logger.default.error(e); // eslint-disable-next-line no-process-exit


      process.exit(1);
    });
    return app;
  }

}

exports.default = ExpressServer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9jb21tb24vc2VydmVyLmpzIl0sIm5hbWVzIjpbImFwcCIsIkV4cHJlc3MiLCJFeHByZXNzU2VydmVyIiwiY29uc3RydWN0b3IiLCJyb290IiwicGF0aCIsIm5vcm1hbGl6ZSIsIl9fZGlybmFtZSIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwibGltaXQiLCJwcm9jZXNzIiwiZW52IiwiUkVRVUVTVF9MSU1JVCIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInRleHQiLCJTRVNTSU9OX1NFQ1JFVCIsInN0YXRpYyIsInJvdXRlciIsInJvdXRlcyIsImxpc3RlbiIsInBvcnQiLCJQT1JUIiwid2VsY29tZSIsInAiLCJsIiwiaW5mbyIsIk5PREVfRU5WIiwib3MiLCJob3N0bmFtZSIsInRoZW4iLCJodHRwIiwiY3JlYXRlU2VydmVyIiwiY2F0Y2giLCJlIiwiZXJyb3IiLCJleGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLElBQUlDLGdCQUFKLEVBQVo7O0FBRWUsTUFBTUMsYUFBTixDQUFvQjtBQUNqQ0MsRUFBQUEsV0FBVyxHQUFHO0FBQ1osVUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZ0IsR0FBRUMsU0FBVSxRQUE1QixDQUFiO0FBRUFQLElBQUFBLEdBQUcsQ0FBQ1EsR0FBSixDQUFRQyxVQUFVLENBQUNDLElBQVgsQ0FBZ0I7QUFBRUMsTUFBQUEsS0FBSyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsYUFBWixJQUE2QjtBQUF0QyxLQUFoQixDQUFSO0FBQ0FkLElBQUFBLEdBQUcsQ0FBQ1EsR0FBSixDQUFRQyxVQUFVLENBQUNNLFVBQVgsQ0FBc0I7QUFBRUMsTUFBQUEsUUFBUSxFQUFFLElBQVo7QUFBa0JMLE1BQUFBLEtBQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGFBQVosSUFBNkI7QUFBdEQsS0FBdEIsQ0FBUjtBQUNBZCxJQUFBQSxHQUFHLENBQUNRLEdBQUosQ0FBUUMsVUFBVSxDQUFDUSxJQUFYLENBQWdCO0FBQUVOLE1BQUFBLEtBQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGFBQVosSUFBNkI7QUFBdEMsS0FBaEIsQ0FBUjtBQUNBZCxJQUFBQSxHQUFHLENBQUNRLEdBQUosQ0FBUSwyQkFBYUksT0FBTyxDQUFDQyxHQUFSLENBQVlLLGNBQXpCLENBQVI7QUFDQWxCLElBQUFBLEdBQUcsQ0FBQ1EsR0FBSixDQUFRUCxpQkFBUWtCLE1BQVIsQ0FBZ0IsR0FBRWYsSUFBSyxTQUF2QixDQUFSO0FBQ0Q7O0FBRURnQixFQUFBQSxNQUFNLENBQUNDLE1BQUQsRUFBUztBQUNiLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVEQyxFQUFBQSxNQUFNLENBQUNDLElBQUksR0FBR1gsT0FBTyxDQUFDQyxHQUFSLENBQVlXLElBQXBCLEVBQTBCO0FBQzlCLFVBQU1DLE9BQU8sR0FBR0MsQ0FBQyxJQUFJLE1BQU1DLGdCQUFFQyxJQUFGLENBQ3hCLHFCQUFvQmhCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ0IsUUFBWixJQUNkLGFBQWMsT0FBTUMsRUFBRSxDQUFDQyxRQUFILEVBQWMsYUFBWUwsQ0FBRSxHQUY5QixDQUEzQjs7QUFLQSwwQkFBSTFCLEdBQUosRUFBUyxLQUFLcUIsTUFBZCxFQUFzQlcsSUFBdEIsQ0FBMkIsTUFBTTtBQUMvQkMsTUFBQUEsSUFBSSxDQUFDQyxZQUFMLENBQWtCbEMsR0FBbEIsRUFBdUJzQixNQUF2QixDQUE4QkMsSUFBOUIsRUFBb0NFLE9BQU8sQ0FBQ0YsSUFBRCxDQUEzQztBQUNELEtBRkQsRUFFR1ksS0FGSCxDQUVTQyxDQUFDLElBQUk7QUFDWlQsc0JBQUVVLEtBQUYsQ0FBUUQsQ0FBUixFQURZLENBRVo7OztBQUNBeEIsTUFBQUEsT0FBTyxDQUFDMEIsSUFBUixDQUFhLENBQWI7QUFDRCxLQU5EO0FBUUEsV0FBT3RDLEdBQVA7QUFDRDs7QUEvQmdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCAqIGFzIG9zIGZyb20gJ29zJztcbmltcG9ydCBsIGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCBvYXMgZnJvbSAnLi9zd2FnZ2VyJztcblxuY29uc3QgYXBwID0gbmV3IEV4cHJlc3MoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc1NlcnZlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHJvb3QgPSBwYXRoLm5vcm1hbGl6ZShgJHtfX2Rpcm5hbWV9Ly4uLy4uYCk7XG5cbiAgICBhcHAudXNlKGJvZHlQYXJzZXIuanNvbih7IGxpbWl0OiBwcm9jZXNzLmVudi5SRVFVRVNUX0xJTUlUIHx8ICcxMDBrYicgfSkpO1xuICAgIGFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUsIGxpbWl0OiBwcm9jZXNzLmVudi5SRVFVRVNUX0xJTUlUIHx8ICcxMDBrYicgfSkpO1xuICAgIGFwcC51c2UoYm9keVBhcnNlci50ZXh0KHsgbGltaXQ6IHByb2Nlc3MuZW52LlJFUVVFU1RfTElNSVQgfHwgJzEwMGtiJyB9KSk7XG4gICAgYXBwLnVzZShjb29raWVQYXJzZXIocHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQpKTtcbiAgICBhcHAudXNlKEV4cHJlc3Muc3RhdGljKGAke3Jvb3R9L3B1YmxpY2ApKTtcbiAgfVxuXG4gIHJvdXRlcihyb3V0ZXMpIHtcbiAgICB0aGlzLnJvdXRlcyA9IHJvdXRlcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3Rlbihwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCkge1xuICAgIGNvbnN0IHdlbGNvbWUgPSBwID0+ICgpID0+IGwuaW5mbyhcbiAgICAgIGB1cCBhbmQgcnVubmluZyBpbiAke3Byb2Nlc3MuZW52Lk5PREVfRU5WXG4gICAgICAgICAgfHwgJ2RldmVsb3BtZW50J30gQDogJHtvcy5ob3N0bmFtZSgpfSBvbiBwb3J0OiAke3B9fWAsXG4gICAgKTtcblxuICAgIG9hcyhhcHAsIHRoaXMucm91dGVzKS50aGVuKCgpID0+IHtcbiAgICAgIGh0dHAuY3JlYXRlU2VydmVyKGFwcCkubGlzdGVuKHBvcnQsIHdlbGNvbWUocG9ydCkpO1xuICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgbC5lcnJvcihlKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm9jZXNzLWV4aXRcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhcHA7XG4gIH1cbn1cbiJdfQ==