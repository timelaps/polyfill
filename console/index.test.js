var console = require('.');
var b = require('@timelaps/batterie');
var forEach = require('@timelaps/array/for/each');
b.describe('console', function () {
    b.expect(console).toBeObject();
    b.it('has all methods, including experimental ones', function (t) {
        forEach('log,error,trace,warn,log,dir,error,clear,table,profile,profileEnd,time,timeEnd,timeStamp'.split(','), function (method) {
            t.expect(console[method]).toBeFunction();
        });
    }, 14);
});