module.exports = M;
var round = require('@timelaps/number/round');
var ceil = require('@timelaps/number/ceil');
var floor = require('@timelaps/number/floor');

function M(global) {
    var Math = global.Math || {};
    // Decimal round
    if (!Math.round10) {
        Math.round10 = round;
    }
    // Decimal floor
    if (!Math.floor10) {
        Math.floor10 = floor;
    }
    // Decimal ceil
    if (!Math.ceil10) {
        Math.ceil10 = ceil;
    }
    return Math;
}