module.exports = function forIn(object, fn) {
    for (var n in object) {
        fn(object[n], n, object);
    }
};