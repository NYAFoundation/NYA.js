'use strict';
var kefir = require('kefir');
var Request = require('../atoms/Request');

var BaseStream = function BaseStream() {
    if (this instanceof BaseStream) {
        this.init();
        return this;
    }
    return new BaseStream();
};

BaseStream.prototype.emitter = null;
BaseStream.prototype.origin = null;
BaseStream.prototype.preInit = function() {

};

BaseStream.prototype.init = function(emitter, isNew) {
    var self = this;
    if (isNew) {
        self = new self.constructor();
    }
    if (emitter === undefined) {
        self.emitter = kefir.emitter();
        return self;
    }
    self.emitter = emitter;
    return self;
};


BaseStream.prototype.from = function from(stream) {
    var self = this;
    self.origin = stream;
    stream.onValue(function requestEmitter(request) {
        self.emitter.emit(request);
    });
    return this;
};

BaseStream.prototype.to = function to(stream) {
    if (stream.from) {
        return stream.from(this);
    }
    this.onValue(stream);
    return this;
};

BaseStream.prototype.emit = function emit(val) {
    this.emitter.emit(val);
    return this;
};

BaseStream.prototype.end = function end() {
    this.emitter.end();
    return this;
};


BaseStream.prototype.onValue = function onValue(listener) {
    var self = this;
    self.emitter.onValue(listener);
    return this;
};

BaseStream.prototype.offValue = function offValue(listener) {
    this.emitter.offValue(listener);
    return this;
};


BaseStream.prototype.onEnd = function onEnd(listener) {
    this.emitter.onEnd(listener);
    return this;
};

BaseStream.prototype.offEnd = function offEnd(listener) {
    this.emitter.offEnd(listener);
    return this;
};

BaseStream.prototype.onAny = function onAny(listener) {
    this.emitter.onAny(listener);
    return this;
};

BaseStream.prototype.offAny = function offAny(listener) {
    this.emitter.offAny(listener);
    return this;
};

//Kefir observable
BaseStream.prototype.map = function map(fn) {
    return this.init(this.emitter.map(fn), true);
};

BaseStream.prototype.mapTo = function mapTo(value) {
    return this.init(this.emitter.mapTo(value), true);
};

BaseStream.prototype.pluck = function pluck(property) {
    return this.init(this.emitter.pluck(property), true);
};

BaseStream.prototype.invoke = function invoke(method) {
    return this.init(this.emitter.invoke(method), true);
};


BaseStream.prototype.not = function not() {
    return this.init(this.emitter.not(), true);
};

BaseStream.prototype.timestamp = function timestamp() {
    return this.init(this.emitter.timestamp(), true);
};

BaseStream.prototype.tap = function tap(fn) {
    return this.init(this.emitter.tap(fn), true);
};

BaseStream.prototype.filter = function filter(fn) {
    return this.init(this.emitter.filter(fn), true);
};

BaseStream.prototype.take = function take(n) {
    return this.init(this.emitter.take(n), true);
};

BaseStream.prototype.takeWhile = function takeWhile(predicate) {
    return this.init(this.emitter.takeWhile(predicate), true);
};

BaseStream.prototype.skip = function skip(n) {
    return this.init(this.emitter.skip(n), true);
};

BaseStream.prototype.skipWhile = function skipWhile(predicate) {
    return this.init(this.emitter.skipWhile(predicate), true);
};

BaseStream.prototype.skipDuplicates = function skipDuplicates(comparator) {
    return this.init(this.emitter.skipDuplicates(comparator), true);
};


BaseStream.prototype.diff = function diff(fn, seed) {
    return this.init(this.emitter.diff(fn, seed), true);
};

BaseStream.prototype.scan = function scan(fn, seed) {
    return this.init(this.emitter.scan(fn, seed), true);
};

BaseStream.prototype.reduce = function reduce(fn, seed) {
    return this.init(this.emitter.reduce(fn, seed), true);
};

BaseStream.prototype.mapEnd = function mapEnd(fn) {
    return this.init(this.emitter.mapEnd(fn), true);
};

BaseStream.prototype.skipEnd = function skipEnd() {
    return this.init(this.emitter.skipEnd(), true);
};

BaseStream.prototype.slidingWindow = function slidingWindow(max, min) {
    return this.init(this.emitter.slidingWindow(max, min), true);
};

BaseStream.prototype.bufferWhile = function bufferWhile(predicate, options) {
    return this.init(this.emitter.bufferWhile(predicate, options), true);
};

BaseStream.prototype.delay = function delay(wait) {
    return this.init(this.emitter.delay(wait), true);
};

BaseStream.prototype.throttle = function throttle(wait, options) {
    return this.init(this.emitter.throttle(wait, options), true);
};

BaseStream.prototype.debounce = function debounce(wait, options) {
    return this.init(this.emitter.debounce(wait, options), true);
};

BaseStream.prototype.flatten = function flatten(transformer) {
    return this.init(this.emitter.flatten(transformer), true);
};

BaseStream.prototype.transduce = function transduce(transducer) {
    return this.init(this.emitter.transduce(transducer), true);
};

BaseStream.prototype.withHandler = function withHandler(handler) {
    return this.init(this.emitter.withHandler(handler), true);
};

module.exports = BaseStream;