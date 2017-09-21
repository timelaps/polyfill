var isUndefined = require('@timelaps/is/undefined');
var isNull = require('@timelaps/is/null');
var isFunction = require('@timelaps/is/function');
module.exports = create;

function create(global) {
    var create, Object = global.Object;
    var PROTO = '__proto__';
    if (!isFunction((create = Object.create))) {
        create = Object.create = (function (undefined) {
            var TMP = function () {};
            return function (prototype, propertiesObject) {
                if (prototype !== Object(prototype) && !isNull(prototype)) {
                    throw TypeError('Argument must be an object, or ' + null);
                }
                TMP[PROTOTYPE] = prototype || {};
                var result = new TMP();
                TMP[PROTOTYPE] = null;
                if (!isUndefined(propertiesObject)) {
                    Object.defineProperties(result, propertiesObject);
                }
                // to imitate the case of Object.create(null)
                if (isNull(prototype)) {
                    result[PROTO] = null;
                }
                return result;
            };
        })();
    }
    return create;
}