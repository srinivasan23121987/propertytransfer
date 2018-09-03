"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _factory = require("../factory");

var _factory2 = _interopRequireDefault(_factory);

var _layout = require("../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _routes = require("../routes");

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\projects\\propertytransfer\\ethereum\\pages\\index.js?entry";


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = { campaignList: '' }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: "componentDidMount",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var rows, campaigns, i, properties;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                rows = [];
                                _context.next = 3;
                                return _factory2.default.methods.listProperty().call();

                            case 3:
                                campaigns = _context.sent;
                                i = 0;

                            case 5:
                                if (!(i < campaigns)) {
                                    _context.next = 14;
                                    break;
                                }

                                _context.next = 8;
                                return _factory2.default.methods.properties(i).call();

                            case 8:
                                properties = _context.sent;

                                console.log(properties);
                                rows.push(properties.addr);

                            case 11:
                                i++;
                                _context.next = 5;
                                break;

                            case 14:

                                this.setState({ campaignList: rows });

                            case 15:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref2.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: "renderCardComponent",
        value: function renderCardComponent() {
            var campaignList = this.state.campaignList.toString().split(',');
            console.log(campaignList);
            var items = campaignList.map(function (address, index) {

                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: "/view/" + address + "/" + index, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 28
                        }
                    }, _react2.default.createElement("a", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 28
                        }
                    }, "View Property")),
                    fluid: true
                };
            });
            return items;
        }
    }, {
        key: "render",
        value: function render() {
            var paddingtop = {
                'padding-top': '20px'
            };
            return _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }), _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement("h3", { style: paddingtop, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, "Property List"), _react2.default.createElement(_semanticUiReact.Grid, { style: this.props.paddingtop, stackable: true, columns: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, "      ", _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Group, { items: this.renderCardComponent(), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }), "      "), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_routes.Link, { route: "/add/new", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { size: "large", icon: true, labelPosition: "right", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, "Add Property", _react2.default.createElement(_semanticUiReact.Icon, { name: "add", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }))))))));
        }
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJJY29uIiwiQ29udGFpbmVyIiwiQ2FtcGFpZ25JbmRleCIsInN0YXRlIiwiY2FtcGFpZ25MaXN0Iiwicm93cyIsIm1ldGhvZHMiLCJsaXN0UHJvcGVydHkiLCJjYWxsIiwiY2FtcGFpZ25zIiwiaSIsInByb3BlcnRpZXMiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImFkZHIiLCJzZXRTdGF0ZSIsInRvU3RyaW5nIiwic3BsaXQiLCJpdGVtcyIsIm1hcCIsImFkZHJlc3MiLCJpbmRleCIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJwYWRkaW5ndG9wIiwicHJvcHMiLCJyZW5kZXJDYXJkQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFXOztBQUNuQixBQUFTLEFBQU0sQUFBTSxBQUFPLEFBQUs7Ozs7Ozs7SUFDM0IsQTs7Ozs7Ozs7Ozs7Ozs7OE5BQ0YsQSxRQUFRLEVBQUUsYyxBQUFGLEFBQWdCOzs7Ozs7Ozs7OztpQ0FFaEI7QSx1QyxBQUFPOzt1Q0FFYSxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsZUFBaEIsQSxBQUErQjs7aUNBQWpEO0EscURBRUc7QSxvQ0FBSSxBOzs7c0NBQUcsSUFBSSxBOzs7Ozs7dUNBQ08sa0JBQUEsQUFBUSxRQUFSLEFBQWdCLFdBQWhCLEFBQTJCLEdBQTNCLEFBQThCLEE7O2lDQUEvQztBLHNEQUNOOzt3Q0FBQSxBQUFRLElBQVIsQUFBWSxBQUNYO3FDQUFBLEFBQUssS0FBSyxXQUFWLEFBQXFCOztpQ0FISztBOzs7O2lDQU0vQjs7cUNBQUEsQUFBSyxTQUFTLEVBQUUsY0FBaEIsQUFBYyxBQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUVaLEFBQ2xCO2dCQUFJLGVBQWUsS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFYLEFBQXdCLFdBQXhCLEFBQW1DLE1BQXRELEFBQW1CLEFBQXlDLEFBQzVEO29CQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7Z0JBQUkscUJBQVEsQUFBYSxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVMsT0FBVSxBQUU1Qzs7OzRCQUFPLEFBQ0ssQUFDUjtpREFBYyxBQUFDLDhCQUFLLGtCQUFBLEFBQWdCLGdCQUF0QixBQUFpQztzQ0FBakM7d0NBQUEsQUFBMEM7QUFBMUM7cUJBQUEsa0JBQTBDLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSx1QkFGckQsQUFFVyxBQUEwQyxBQUN4RDsyQkFISixBQUFPLEFBR0ksQUFFZDtBQUxVLEFBQ0g7QUFIUixBQUFZLEFBUVosYUFSWTttQkFRWixBQUFPLEFBRVY7Ozs7aUNBQ1EsQUFDTDtnQkFBSTsrQkFBSixBQUFlLEFBQ0csQUFFbEI7QUFIZSxBQUNYO21DQUVJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUs7QUFBTDtBQUFBLGFBQUEsa0JBQUssQUFBQzs7OEJBQUQ7Z0NBQUwsQUFBSyxBQUFVO0FBQVY7QUFBQSxnQ0FBVSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUFXO0FBQVg7QUFBQSwrQkFBVyxjQUFBLFFBQUssT0FBTCxBQUFZOzhCQUFaO2dDQUFBO0FBQUE7ZUFBWCxBQUFXLEFBQ2xDLGtDQUFBLEFBQUMsdUNBQUssT0FBTyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsWUFBYSxXQUFyQyxNQUErQyxTQUEvQyxBQUF3RDs4QkFBeEQ7Z0NBQUE7QUFBQTtlQUFtRSwwQkFBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNuRTtBQURtRTs2Q0FDbkUsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBTyxLQUFuQixBQUFtQixBQUFLOzhCQUF4QjtnQ0FEbUUsQUFDbkU7QUFBQTtnQkFEQSxBQUFtRSxBQUVuRSwyQkFBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUF1QjtBQUF2QjsrQkFBdUIsQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUEsQUFBdUI7QUFBdkI7K0JBQXVCLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUc7QUFBSDtBQUFBLCtCQUFHLEFBQUMseUNBQU8sTUFBUixBQUFhLFNBQVEsTUFBckIsTUFBMEIsZUFBMUIsQUFBd0M7OEJBQXhDO2dDQUFBO0FBQUE7ZUFFakQsZ0NBQUEsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7OEJBQVg7Z0NBTEEsQUFBUSxBQUFlLEFBQ3ZCLEFBRUEsQUFBdUIsQUFBdUIsQUFBRyxBQUVqRCxBQUVIO0FBRkc7Ozs7OztBQXRDb0IsQSxBQTBDNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovcHJvamVjdHMvcHJvcGVydHl0cmFuc2Zlci9ldGhlcmV1bSJ9