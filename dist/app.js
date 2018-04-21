'use strict';

var _index = require('./config/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./models/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = () => {
  console.log(_index2.default.name);
  new _index3.Users();
  new _index3.Product();
};

app();

setInterval(app, 5000);