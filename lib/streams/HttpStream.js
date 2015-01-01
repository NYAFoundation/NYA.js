'use strict';
var http = require('http');
var Request = require('../atoms/Request.js');
var BaseStream = require('./BaseStream.js');


var HttpStream = function HttpStream(port, host) {
    if (this instanceof HttpStream) {
        this.init();
        if (port === undefined) {
            return this;
        }
        this.start(port, host);
        return this;
    }
    return new HttpStream(port, host);
};

HttpStream.prototype.init = function init(emitter, isNew) {
    var self = this;
    if (isNew) {
        self = new self.constructor();
        self.port = this.port;
        self.host = this.host;
        self.http = this.http;
    }
    if (emitter === undefined) {
        self.emitter = kefir.emitter();
        return self;
    }
    self.emitter = emitter;
    return self;
}

HttpStream.prototype = new BaseStream();

HttpStream.prototype.http = null;
HttpStream.prototype.port = null;
HttpStream.prototype.host = null;
HttpStream.prototype.constructor = HttpStream;
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

    if (port === undefined) {
        port = 3002;
    }

    self.http.listen(port, host);
    self.port = port;
    self.host = host || '0.0.0.0';
    return this;
};

HttpStream.prototype.end = function end() {
    var self = this;
    this.http.close(function closeConnection() {
        delete self.http;
        self.http = null;
        self.emitter.end();
    });
    return this;
};

HttpStream.prototype.start = function startStream(port, host) {
    return this.listen(port, host);
};

module.exports = HttpStream;