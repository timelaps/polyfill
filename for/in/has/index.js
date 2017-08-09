var forIn = require('../');
module.exports = function forOwn(object, fn) {
    forIn(object, function (value, key) {
        if (object.hasOwnProperty(key)) {
            fn(value, key, object);
        }
    });
};