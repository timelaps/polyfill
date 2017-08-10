module.exports = polyfill;
var console = polyfill.console = require('./console');
var now = polyfill.now = require('./now');
var performance = polyfill.performance = require('./performance');
var raf = polyfill.raf = require('./raf');
var math = polyfill.math = require('./math');
var registerElement = polyfill.registerElement = require('./register-element');
var create = polyfill.create = require('./create');
var bind = polyfill.bind = require('./bind');
var matchMedia = polyfill.matchMedia = require('./match-media');

function polyfill(global) {
    bind(global);
    console(global);
    now(global);
    performance(global);
    raf(global);
    math(global);
    registerElement(global);
    create(global);
}