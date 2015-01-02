'use strict';
var kefir = require('kefir');
var BaseStream = require('./BaseStream.js');


var ResponseStream = function ResponseStream(from) {
    if (this instanceof ResponseStream) {
        this.init();
        this.finsishEmitter = kefir.emitter();
        this.closeEmitter = kefir.emitter();
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
ResponseStream.prototype.queue = [];
ResponseStream.prototype.preQueue = [];
ResponseStream.prototype.closeEmitter = null;
ResponseStream.prototype.finsishEmitter = null;

ResponseStream.prototype.use = function processing(fn) {
    this.queue.push(fn);
};

ResponseStream.prototype.from = function from(stream) {
    var self = this;
    self.broke();
    self.origin = stream;
    self.pipeListener = function requestEmitter(request) {
        request = self.preprocessing(x);
        self.emitter.emit(request);
    }
    stream.onValue(self.pipeListener);
    stream.onEnd(self.broke);
    return this;
}

ResponseStream.prototype.process = function process(x, queue) {
    var queue = queue || this.queue;
    var data = x;
    for (var i in queue) {
        data = queue[i](x);
    }
    return data;
};


ResponseStream.prototype.preprocessing = function preprocessing(x) {
    var self = this;
    var preQueue = self.preQueue;
    x.res.on('close', function() {
        self.closeEmitter.emit(x);
    });
    x.res.on('finish', function() {
        self.finsishEmitter.emit(x);
    });
    return self;
};

//Emits on all responses 'close' event
ResponseStream.prototype.onClose = function onClose(fn) {
    self.closeEmitter.onValue(fn);
    return self;
};

//Emits on all responses 'finish' event
ResponseStream.prototype.onFinish = function onFinish(fn) {
    self.finsishEmitter.onValue(fn);
    return self;
};


module.exports = ResponseStream;