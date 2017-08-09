module.exports = polyfill;
var console = polyfill.console = require('./console');
var now = polyfill.now = require('./now');
var performance = polyfill.performance = require('./performance');
var raf = polyfill.raf = require('./raf');
var math = polyfill.math = require('./math');

function polyfill(global) {
    console(global);
    now(global);
    performance(global);
    raf(global);
    math(global);
}