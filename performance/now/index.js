var timeshim = require('../../now');
var offset = require('../offset');
module.exports = function now(global) {
    var performance = require('../')(global, true);
    if (!performance.now) {
        performance.now = (global.process ? (function () {
            return function () {
                return process.uptime() * 1000;
            };
        }()) : (performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || (function () {
            var now = timeshim(global);
            var then = offset;
            return function () {
                return now() - then;
            };
        }())));
    }
    return applied;

    function applied() {
        return performance.now();
    }
};