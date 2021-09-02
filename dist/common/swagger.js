"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = swagger;

var _swaggerExpressMiddleware = _interopRequireDefault(require("swagger-express-middleware"));

var path = _interopRequireWildcard(require("path"));

var _error = _interopRequireDefault(require("../api/middlewares/error.handler"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function swagger(app, routes) {
  return new Promise((resolve, reject) => {
    (0, _swaggerExpressMiddleware.default)(path.join(__dirname, 'api.yml'), app, (err, mw) => {
      if (err) {
        return reject(err);
      } // Enable Express' case-sensitive and strict options
      // (so "/entities", "/Entities", and "/Entities/" are all different)


      app.enable('case sensitive routing');
      app.enable('strict routing');
      app.use(mw.metadata());
      app.use(mw.files({
        // Override the Express App's case-sensitive
        // and strict-routing settings for the Files middleware.
        caseSensitive: false,
        strict: false
      }, {
        useBasePath: false,
        apiPath: process.env.SWAGGER_API_SPEC // Disable serving the "api.yml" file
        // rawFilesPath: false

      }));
      app.use(mw.parseRequest({
        // Configure the cookie parser to use secure cookies
        cookie: {
          secret: process.env.SESSION_SECRET
        },
        // Don't allow JSON content over 100kb (default is 1mb)
        json: {
          limit: process.env.REQUEST_LIMIT
        }
      })); // These two middleware don't have any options (yet)

      app.use(mw.CORS(), mw.validateRequest());
      routes(app); // eslint-disable-next-line no-unused-vars, no-shadow

      app.use(_error.default);
      return resolve();
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9jb21tb24vc3dhZ2dlci5qcyJdLCJuYW1lcyI6WyJzd2FnZ2VyIiwiYXBwIiwicm91dGVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXRoIiwiam9pbiIsIl9fZGlybmFtZSIsImVyciIsIm13IiwiZW5hYmxlIiwidXNlIiwibWV0YWRhdGEiLCJmaWxlcyIsImNhc2VTZW5zaXRpdmUiLCJzdHJpY3QiLCJ1c2VCYXNlUGF0aCIsImFwaVBhdGgiLCJwcm9jZXNzIiwiZW52IiwiU1dBR0dFUl9BUElfU1BFQyIsInBhcnNlUmVxdWVzdCIsImNvb2tpZSIsInNlY3JldCIsIlNFU1NJT05fU0VDUkVUIiwianNvbiIsImxpbWl0IiwiUkVRVUVTVF9MSU1JVCIsIkNPUlMiLCJ2YWxpZGF0ZVJlcXVlc3QiLCJlcnJvckhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFZSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsTUFBdEIsRUFBOEI7QUFDM0MsU0FBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3RDLDJDQUFXQyxJQUFJLENBQUNDLElBQUwsQ0FBVUMsU0FBVixFQUFxQixTQUFyQixDQUFYLEVBQTRDUCxHQUE1QyxFQUFpRCxDQUFDUSxHQUFELEVBQU1DLEVBQU4sS0FBYTtBQUM1RCxVQUFJRCxHQUFKLEVBQVM7QUFDUCxlQUFPSixNQUFNLENBQUNJLEdBQUQsQ0FBYjtBQUNELE9BSDJELENBSTVEO0FBQ0E7OztBQUNBUixNQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyx3QkFBWDtBQUNBVixNQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxnQkFBWDtBQUVBVixNQUFBQSxHQUFHLENBQUNXLEdBQUosQ0FBUUYsRUFBRSxDQUFDRyxRQUFILEVBQVI7QUFDQVosTUFBQUEsR0FBRyxDQUFDVyxHQUFKLENBQVFGLEVBQUUsQ0FBQ0ksS0FBSCxDQUFTO0FBQ2Y7QUFDQTtBQUNBQyxRQUFBQSxhQUFhLEVBQUUsS0FIQTtBQUlmQyxRQUFBQSxNQUFNLEVBQUU7QUFKTyxPQUFULEVBS0w7QUFDREMsUUFBQUEsV0FBVyxFQUFFLEtBRFo7QUFFREMsUUFBQUEsT0FBTyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBRnBCLENBR0Q7QUFDQTs7QUFKQyxPQUxLLENBQVI7QUFZQXBCLE1BQUFBLEdBQUcsQ0FBQ1csR0FBSixDQUFRRixFQUFFLENBQUNZLFlBQUgsQ0FBZ0I7QUFDdEI7QUFDQUMsUUFBQUEsTUFBTSxFQUFFO0FBQ05DLFVBQUFBLE1BQU0sRUFBRUwsT0FBTyxDQUFDQyxHQUFSLENBQVlLO0FBRGQsU0FGYztBQUt0QjtBQUNBQyxRQUFBQSxJQUFJLEVBQUU7QUFDSkMsVUFBQUEsS0FBSyxFQUFFUixPQUFPLENBQUNDLEdBQVIsQ0FBWVE7QUFEZjtBQU5nQixPQUFoQixDQUFSLEVBdEI0RCxDQWlDNUQ7O0FBQ0EzQixNQUFBQSxHQUFHLENBQUNXLEdBQUosQ0FDRUYsRUFBRSxDQUFDbUIsSUFBSCxFQURGLEVBRUVuQixFQUFFLENBQUNvQixlQUFILEVBRkY7QUFLQTVCLE1BQUFBLE1BQU0sQ0FBQ0QsR0FBRCxDQUFOLENBdkM0RCxDQXlDNUQ7O0FBQ0FBLE1BQUFBLEdBQUcsQ0FBQ1csR0FBSixDQUFRbUIsY0FBUjtBQUNBLGFBQU8zQixPQUFPLEVBQWQ7QUFDRCxLQTVDRDtBQTZDRCxHQTlDTSxDQUFQO0FBK0NEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSAnc3dhZ2dlci1leHByZXNzLW1pZGRsZXdhcmUnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSAnLi4vYXBpL21pZGRsZXdhcmVzL2Vycm9yLmhhbmRsZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzd2FnZ2VyKGFwcCwgcm91dGVzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbWlkZGxld2FyZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnYXBpLnltbCcpLCBhcHAsIChlcnIsIG13KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICAgIC8vIEVuYWJsZSBFeHByZXNzJyBjYXNlLXNlbnNpdGl2ZSBhbmQgc3RyaWN0IG9wdGlvbnNcbiAgICAgIC8vIChzbyBcIi9lbnRpdGllc1wiLCBcIi9FbnRpdGllc1wiLCBhbmQgXCIvRW50aXRpZXMvXCIgYXJlIGFsbCBkaWZmZXJlbnQpXG4gICAgICBhcHAuZW5hYmxlKCdjYXNlIHNlbnNpdGl2ZSByb3V0aW5nJyk7XG4gICAgICBhcHAuZW5hYmxlKCdzdHJpY3Qgcm91dGluZycpO1xuXG4gICAgICBhcHAudXNlKG13Lm1ldGFkYXRhKCkpO1xuICAgICAgYXBwLnVzZShtdy5maWxlcyh7XG4gICAgICAgIC8vIE92ZXJyaWRlIHRoZSBFeHByZXNzIEFwcCdzIGNhc2Utc2Vuc2l0aXZlXG4gICAgICAgIC8vIGFuZCBzdHJpY3Qtcm91dGluZyBzZXR0aW5ncyBmb3IgdGhlIEZpbGVzIG1pZGRsZXdhcmUuXG4gICAgICAgIGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgICBzdHJpY3Q6IGZhbHNlLFxuICAgICAgfSwge1xuICAgICAgICB1c2VCYXNlUGF0aDogZmFsc2UsXG4gICAgICAgIGFwaVBhdGg6IHByb2Nlc3MuZW52LlNXQUdHRVJfQVBJX1NQRUMsXG4gICAgICAgIC8vIERpc2FibGUgc2VydmluZyB0aGUgXCJhcGkueW1sXCIgZmlsZVxuICAgICAgICAvLyByYXdGaWxlc1BhdGg6IGZhbHNlXG4gICAgICB9KSk7XG5cbiAgICAgIGFwcC51c2UobXcucGFyc2VSZXF1ZXN0KHtcbiAgICAgICAgLy8gQ29uZmlndXJlIHRoZSBjb29raWUgcGFyc2VyIHRvIHVzZSBzZWN1cmUgY29va2llc1xuICAgICAgICBjb29raWU6IHtcbiAgICAgICAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFU1NJT05fU0VDUkVULFxuICAgICAgICB9LFxuICAgICAgICAvLyBEb24ndCBhbGxvdyBKU09OIGNvbnRlbnQgb3ZlciAxMDBrYiAoZGVmYXVsdCBpcyAxbWIpXG4gICAgICAgIGpzb246IHtcbiAgICAgICAgICBsaW1pdDogcHJvY2Vzcy5lbnYuUkVRVUVTVF9MSU1JVCxcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcblxuICAgICAgLy8gVGhlc2UgdHdvIG1pZGRsZXdhcmUgZG9uJ3QgaGF2ZSBhbnkgb3B0aW9ucyAoeWV0KVxuICAgICAgYXBwLnVzZShcbiAgICAgICAgbXcuQ09SUygpLFxuICAgICAgICBtdy52YWxpZGF0ZVJlcXVlc3QoKSxcbiAgICAgICk7XG5cbiAgICAgIHJvdXRlcyhhcHApO1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMsIG5vLXNoYWRvd1xuICAgICAgYXBwLnVzZShlcnJvckhhbmRsZXIpO1xuICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iXX0=