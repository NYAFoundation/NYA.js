'use strict';
var kefir = require('kefir');
var Request = require('../atoms/Request.js');
var Response = require('../atoms/Response.js');
var BaseStream = require('./BaseStream.js');


var ResponseStream = function ResponseStream(from) {
    if (this instanceof ResponseStream) {
        this.emitter = kefir.emitter();
        if (from === undefined) {
            return this;
        }
        this.from(from);
        return this;
    }
    return new ResponseStream(from);
};

ResponseStream.prototype = new BaseStream();

module.exports = ResponseStream;