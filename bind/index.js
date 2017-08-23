var slice = [].slice;
var PROTOTYPE = 'prototype';
var isInstance = require('@timelaps/is/instance');
var isFunction = require('@timelaps/is/function');
module.exports = function (global) {
    var bind, Function = global.Function,
        proto = Function[PROTOTYPE];
    if (!(bind = proto.bind)) {
        bind = proto.bind = function (context) {
            if (!isFunction(this)) {
                // closest thing possible to the ECMAScript 5
                // internal IsCallable function
                throw new TypeError('Function.' + PROTOTYPE + '.bind - what is trying to be bound is not callable');
            }
            var aArgs = slice.call(arguments, 1),
                fToBind = this,
                FNOP = function () {},
                fBound = function () {
                    return fToBind.apply(isInstance(this, FNOP) ? this : context, aArgs.concat(slice.call(arguments)));
                };
            if (this[PROTOTYPE]) {
                // native functions don't have a prototype
                FNOP[PROTOTYPE] = this[PROTOTYPE];
            }
            fBound[PROTOTYPE] = new FNOP();
            return fBound;
        };
    }
    return bind;
};