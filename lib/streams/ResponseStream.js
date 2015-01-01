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

ResponseStream.prototype.processing = function processing(fn) {
    // body...
}

module.exports = ResponseStream;