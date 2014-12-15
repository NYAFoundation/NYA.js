'use strict';
var kefir = require('kefir');
var BaseStream = require('./BaseStream.js');

var RouteStream = function RouteStream(from) {
    if (this instanceof RouteStream) {
        this.emitter = kefir.emitter();
        return this;
    }
    return new RouteStream(from);
};

RouteStream.prototype = new BaseStream();

module.exports = RouteStream;