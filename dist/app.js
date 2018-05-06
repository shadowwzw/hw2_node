'use strict';

var _dirwatcher = require('./dirwatcher');

var _dirwatcher2 = _interopRequireDefault(_dirwatcher);

var _importer = require('./importer');

var _importer2 = _interopRequireDefault(_importer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dirWatcher = new _dirwatcher2.default();
const importer = new _importer2.default();

dirWatcher.watch('./data/', 1000);

dirWatcher.on('changed', async file => {
    const fileContent = await importer.import(file);
    console.log('fileContent = ', fileContent + '');
});