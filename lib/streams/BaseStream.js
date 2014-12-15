'use strict';
var kefir = require('kefir');
var Request = require('../atoms/Request');

var BaseStream = function BaseStream() {
    if (this instanceof BaseStream) {
        this.emitter = kefir.emitter();
        return this;
    }
    return new BaseStream();
};

BaseStream.prototype.emitter = null;
BaseStream.prototype.origin = null;


BaseStream.prototype.from = function from(stream) {
    var self = this;
    self.origin = stream;
    stream.onValue(function requestEmitter(request) {
        if (request instanceof Request) {
            self.emitter.emit(request);
        }
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
    return this.emitter.map(fn);
};

BaseStream.prototype.mapTo = function mapTo(value) {
    return this.emitter.mapTo(value);
};

BaseStream.prototype.pluck = function pluck(property) {
    return this.emitter.pluck(property);
};

BaseStream.prototype.invoke = function invoke(method) {
    return this.emitter.invoke(method);
};


BaseStream.prototype.not = function not() {
    return this.emitter.not();
};

BaseStream.prototype.timestamp = function timestamp() {
    return this.emitter.timestamp();
};

BaseStream.prototype.tap = function tap(fn) {
    return this.emitter.tap(fn);
};

BaseStream.prototype.filter = function filter(fn) {
    return this.emitter.filter(fn);
};

BaseStream.prototype.take = function take(n) {
    return this.emitter.take(n);
};

BaseStream.prototype.takeWhile = function takeWhile(predicate) {
    return this.emitter.takeWhile(predicate);
};

BaseStream.prototype.skip = function skip(n) {
    return this.emitter.skip(n);
};

BaseStream.prototype.skipWhile = function skipWhile(predicate) {
    return this.emitter.skipWhile(predicate);
};

BaseStream.prototype.skipDuplicates = function skipDuplicates(comparator) {
    return this.emitter.skipDuplicates(comparator);
};


BaseStream.prototype.diff = function diff(fn, seed) {
    return this.emitter.diff(fn, seed);
};

BaseStream.prototype.scan = function scan(fn, seed) {
    return this.emitter.scan(fn, seed);
};

BaseStream.prototype.reduce = function reduce(fn, seed) {
    return this.emitter.reduce(fn, seed);
};

BaseStream.prototype.mapEnd = function mapEnd(fn) {
    return this.emitter.mapEnd(fn);
};

BaseStream.prototype.skipEnd = function skipEnd() {
    return this.emitter.skipEnd();
};

BaseStream.prototype.slidingWindow = function slidingWindow(max, min) {
    return this.emitter.slidingWindow(max, min);
};

BaseStream.prototype.bufferWhile = function bufferWhile(predicate, options) {
    return this.emitter.bufferWhile(predicate, options);
};

BaseStream.prototype.delay = function delay(wait) {
    return this.emitter.delay(wait);
};

BaseStream.prototype.throttle = function throttle(wait, options) {
    return this.emitter.throttle(wait, options);
};

BaseStream.prototype.debounce = function debounce(wait, options) {
    return this.emitter.debounce(wait, options);
};

BaseStream.prototype.flatten = function flatten(transformer) {
    return this.emitter.flatten(transformer);
};

BaseStream.prototype.transduce = function transduce(transducer) {
    return this.emitter.transduce(transducer);
};

BaseStream.prototype.withHandler = function withHandler(handler) {
    return this.emitter.withHandler(handler);
};

module.exports = BaseStream;