var passed = test();
var HAS = 'hasOwnProperty';
module.exports = passed ? function forOf(iterable, fn) {
    if (!iterable) {
        return;
    }
    for (var value of iterable) {
        fn(value, iterable);
    }
} : function forOf(iterable, fn) {
    if (!iterable) {
        return;
    }
    var i = 0,
        key = getKey(iterable),
        length = iterable[key];
    for (; i < length; i++) {
        fn(iterable[i], iterable);
    }
};

function getKey(iterable) {
    var key;
    if (iterable[HAS]) {
        if (iterable[HAS]('length')) {
            key = 'length';
        } else if (iterable[HAS]('size')) {
            key = 'size';
        }
    }
    return key;
}

function test() {
    try {
        for (var value of[true]) {
            return value;
        }
    } catch (e) {
        return false;
    }
}