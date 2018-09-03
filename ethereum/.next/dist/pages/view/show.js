"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _factory = require("../../factory");

var _factory2 = _interopRequireDefault(_factory);

var _layout = require("../../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _routes = require("../../routes");

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\projects\\propertytransfer\\ethereum\\pages\\view\\show.js?entry";


var Propertytends = function (_Component) {
  (0, _inherits3.default)(Propertytends, _Component);

  function Propertytends() {
    (0, _classCallCheck3.default)(this, Propertytends);

    return (0, _possibleConstructorReturn3.default)(this, (Propertytends.__proto__ || (0, _getPrototypeOf2.default)(Propertytends)).apply(this, arguments));
  }

  (0, _createClass3.default)(Propertytends, [{
    key: "render",
    value: function render() {
      var paddingtop = {
        'padding-top': '20px'
      };
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Group, { style: paddingtop, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { floated: "right", size: "mini", src: "https://react.semantic-ui.com/images/avatar/large/steve.jpg", __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Steve Sanders"), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "Friends of Elliot"), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "Steve wants to add you to the group ", _react2.default.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "best friends"))), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement("div", { className: "ui two buttons", __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: "green", __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Approve"), _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: "red", __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Decline")))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var getProperty;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(props.query.address);
                _context.next = 3;
                return _factory2.default.methods.getPropertyDetails(props.query.address, "prop1").call();

              case 3:
                getProperty = _context.sent;

                console.log((0, _stringify2.default)(getProperty));
              //   this.setState({items:items})

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Propertytends;
}(_react.Component);

exports.default = Propertytends;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx2aWV3XFxzaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkxheW91dCIsIkxpbmsiLCJCdXR0b24iLCJDYXJkIiwiSW1hZ2UiLCJDb250YWluZXIiLCJQcm9wZXJ0eXRlbmRzIiwicGFkZGluZ3RvcCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRQcm9wZXJ0eURldGFpbHMiLCJjYWxsIiwiZ2V0UHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFXOztBQUNuQixBQUFTLEFBQVEsQUFBTSxBQUFNOzs7Ozs7O0ksQUFFdkI7Ozs7Ozs7Ozs7OzZCQVVJLEFBQ047VUFBSTt1QkFBSixBQUFlLEFBQ0csQUFFaEI7QUFIYSxBQUNYOzZCQUVNLGNBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLE9BQUEsa0JBQUssQUFBQzs7b0JBQUQ7c0JBQUwsQUFBSyxBQUFVO0FBQVY7QUFBQSwwQkFBVSxBQUFDOztvQkFBRDtzQkFBQSxBQUNyQjtBQURxQjtBQUFBLHlCQUNwQixjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBQSxBQUNKO0FBREk7eUJBQ0osQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHdDQUFNLFNBQVAsQUFBZSxTQUFRLE1BQXZCLEFBQTRCLFFBQU8sS0FBbkMsQUFBdUM7b0JBQXZDO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLGtDQUFDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUNBLHNDQUFDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUE7QUFBQTtBQUFBLFNBQ3NDLHdEQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQU4xQyxBQUNFLEFBSUUsQUFDc0MsQUFHeEMsbUNBQUMsY0FBRCxzQkFBQSxBQUFNLFdBQVEsT0FBZDtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx5Q0FBTyxPQUFSLE1BQWMsT0FBZCxBQUFvQjtvQkFBcEI7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFHQSw0QkFBQSxBQUFDLHlDQUFPLE9BQVIsTUFBYyxPQUFkLEFBQW9CO29CQUFwQjtzQkFBQTtBQUFBO1NBaEJKLEFBQVEsQUFBZSxBQUNyQixBQUNKLEFBU0UsQUFDRSxBQUlFLEFBU1A7Ozs7OzJHQXJDOEIsQTs7Ozs7bUJBQ3pCO3dCQUFBLEFBQVEsSUFBSSxNQUFBLEFBQU0sTUFBbEIsQUFBd0I7O3VCQUNGLGtCQUFBLEFBQVEsUUFBUixBQUFnQixtQkFBbUIsTUFBQSxBQUFNLE1BQXpDLEFBQStDLFNBQS9DLEFBQXVELFMsQUFBdkQsQUFBZ0U7O21CQUFsRjtBLHVDQUdGOzt3QkFBQSxBQUFRLElBQUkseUJBQVosQUFBWSxBQUFlLEFBQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVJvQixBLEFBMkM1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L3Byb2plY3RzL3Byb3BlcnR5dHJhbnNmZXIvZXRoZXJldW0ifQ==