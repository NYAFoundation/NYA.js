'use strict';
var BaseStream = require('./BaseStream.js');


var ResponseStream = function ResponseStream(from) {
    if (this instanceof ResponseStream) {
        this.init();
        if (from === undefined) {
            return this;
        }
        this.from(from);
        return this;
    }
    return new ResponseStream(from);
};

ResponseStream.prototype = new BaseStream();
ResponseStream.prototype.constructor = ResponseStream;

ResponseStream.prototype.use = function processing(fn) {
    this.queue.push(fn);
};

ResponseStream.prototype.process = function process(x) {
    var queue = this.queue;
    var data = x;
    for (var i in queue) {
        data = queue[i](x);
    }
    return data;
};

ResponseStream.prototype.queue = [];

module.exports = ResponseStream;