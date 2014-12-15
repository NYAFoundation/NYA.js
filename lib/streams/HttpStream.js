'use strict';
var kefir = require('kefir');
var http = require('http');
var Request = require('../atoms/Request.js');
var BaseStream = require('./BaseStream.js');


var HttpStream = function HttpStream(port, host) {
    if (this instanceof HttpStream) {
        this.emitter = kefir.emitter();
        if (port) {
            this.start(port, host);
        }
        return this;
    }
    return new HttpStream(port, host);
};

HttpStream.prototype = new BaseStream();

HttpStream.prototype.http = null;
// Kefir observable subscribe methods proxing

HttpStream.prototype.listen = function listenHttp(port, host) {
    var self = this;
    if (self.http === null) {
        self.http = http.createServer(function bindEmitter(req, res) {
            var request = new Request(self);

            request.url = req.url;
            request.res = res;
            request.headers = req.headers;
            request.method = req.method;

            request.type = 'text/plain';
            request.code = 200;
            request.body = '';

            self.emitter.emit(request);
        });
    }

    host = host || "127.0.0.1";
    port = port || 300;

    self.http.listen(port, host);

    return this;
};

HttpStream.prototype.end = function end() {
    var self = this;
   this.emitter.onEnd(function() {
        self.http = null;
   });
   this.http.close(function() {
        self.emitter.end();   
   });
   return this; 
}

HttpStream.prototype.start = function startStream(port, host) {
    return this.listen(port, host);
};

module.exports = HttpStream;