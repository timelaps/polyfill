var reduce = require('@timelaps/array/reduce');
var toArray = require('@timelaps/to/array');
module.exports = reduce(toArray('trace,warn,log,dir,error,clear,table,profile,profileEnd,time,timeEnd,timeStamp'), function (memo, key) {
    var method = memo[key];
    if (!method) {
        memo[key] = function () {
            return memo.log(toArray(arguments));
        };
    }
}, global.console);