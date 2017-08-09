module.exports = function console(global) {
    var console = global.console || {};
    var list = 'trace,warn,log,dir,error,clear,table,profile,profileEnd,time,timeEnd,timeStamp'.split(',');
    for (var i = 0; i < list.length; i++) {
        if (!console[list[i]]) {
            console[key] = logShim;
        }
    }

    function logShim() {
        return console.log(arguments);
    }
};