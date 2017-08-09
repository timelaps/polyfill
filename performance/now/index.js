var timeshim = require('../../now');
var offset = require('../offset');
module.exports = function now(global) {
    var performance = require('..')(global, true);
    var now = timeshim(global);
    if (!performance.now) {
        performance.now = (global.process ? (function () {
            var uptime = process.uptime;
            return function () {
                return uptime() / 1000;
            };
        }()) : (performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || (function () {
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