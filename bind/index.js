var slice = [].slice;
var PROTOTYPE = 'prototype';
module.exports = function (global) {
    var Function = global.Function;
    if (!Function[PROTOTYPE].bind) {
        Function[PROTOTYPE].bind = function (context) {
            if (typeof this !== 'function') {
                // closest thing possible to the ECMAScript 5
                // internal IsCallable function
                throw new TypeError('Function.' + PROTOTYPE + '.bind - what is trying to be bound is not callable');
            }
            var aArgs = slice.call(arguments, 1),
                fToBind = this,
                FNOP = function () {},
                fBound = function () {
                    return fToBind.apply(this instanceof FNOP ? this : context, aArgs.concat(slice.call(arguments)));
                };
            if (this[PROTOTYPE]) {
                // native functions don't have a prototype
                FNOP[PROTOTYPE] = this[PROTOTYPE];
            }
            fBound[PROTOTYPE] = new FNOP();
            return fBound;
        };
    }
};