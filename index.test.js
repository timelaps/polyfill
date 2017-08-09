var b = require('@timelaps/batterie');
var polyfill = require('.');
b.describe('polyfill', function () {
    b.expect(polyfill).toBeFunction();
});