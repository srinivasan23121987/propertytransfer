'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/3e59ca68b1c24825ae2ebf4d43a036a4");
    web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFDQSxJQUFJLFlBQUo7QUFDQSxJQUFJLE9BQU8sQUFBUCxXQUFtQixBQUFuQixlQUFrQyxPQUFPLE9BQU8sQUFBZCxTQUF3QixBQUE5RCxhQUEyRSxBQUN2RTtXQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBQ0g7QUFGRCxPQUlBLEFBQ0k7UUFBTSxXQUFTLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFBZ0MsQUFBaEMsQUFBZixBQUNBO1dBQUssQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBTCxBQUNIO0FBQ0Q7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L3Byb2plY3RzL3Byb3BlcnR5dHJhbnNmZXIvZXRoZXJldW0ifQ==