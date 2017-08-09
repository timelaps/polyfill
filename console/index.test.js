var console = require('.')({});
var b = require('@timelaps/batterie');
b.describe('console', function () {
    b.expect(console).toBeObject();
    b.it('has all methods, including experimental ones', function (t) {
        var list = 'log,error,trace,warn,log,dir,error,clear,table,profile,profileEnd,time,timeEnd,timeStamp'.split(',');
        for (var i = 0; i < list.length; i++) {
            check(list[i]);
        }

        function check(method) {
            t.expect(console[method]).toBeFunction();
        }
    }, 14);
});