var console = require('./console');
var now = require('./now');
var performance = require('./performance');
var raf = require('./raf');
module.exports = function polyfill(global) {
    console(global);
    now(global);
    performance(global);
    raf(global);
};