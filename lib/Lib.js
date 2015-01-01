'use strict';
var Lib = function Lib() {
    if (this instanceof Lib) {
        return this;
    }
    return new Lib();
};
Lib.prototype.Lib = Lib;
Lib.prototype.RequestStream = require('./streams/RequestStream.js');
Lib.prototype.HttpStream = require('./streams/HttpStream.js');
Lib.prototype.ResponseStream = require('./streams/ResponseStream.js');
Lib.prototype.CustomStream = require('./streams/CustomStream.js');
Lib.prototype.RouteStream = require('./streams/RouteStream.js');

module.exports = new Lib();