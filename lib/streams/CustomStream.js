'use strict';
var kefir = require('kefir');
var BaseStream = require('./BaseStream.js');

var CustomStream = function CustomStream(name) {
    if (this instanceof CustomStream) {
        this.name = name;
        return this;
    }
    return new CustomStream(name);
};

CustomStream.prototype = new BaseStream();

module.exports = CustomStream;