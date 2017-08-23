module.exports = performance;
var now = require('./now');
function performance(global, adding) {
    var PERFORMANCE = 'performance';
    var perf = global[PERFORMANCE];
    if (!perf) {
        perf = global[PERFORMANCE] = {};
    }
    if (!adding && !perf.now) {
        now(global);
    }
    return perf;
}