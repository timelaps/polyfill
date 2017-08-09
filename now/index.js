var toNumber = require('@timelaps/hacks/to-number');
module.exports = function (global) {
    var D = global.Date;
    if (!D) {
        return timeNumber;
    }
    if (!D.now) {
        D.now = timeNumber;
    }
    return D.now;

    function timeNumber() {
        return toNumber(new D());
    }
};