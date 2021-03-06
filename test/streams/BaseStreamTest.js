var chai = require('chai');
var mocha = require('mocha');
var should = chai.should();
var path = require('path');
var sinon = require('sinon');

var kefir = require('kefir');


var BaseStream = require('../../lib/streams/BaseStream.js');

describe('BaseStream', function() {
    var baseStream = null;
    before(function() {
        baseStream = BaseStream();
    });
    after(function() {
        delete baseStream;
    })
    it('should have property #origin', function() {
        baseStream.should.have.a.property('origin');
    });
    it('should have proprty #emitter', function() {
        baseStream.should.have.a.property('emitter');
    });
    it('should have method .emit()', function() {
        baseStream.should.have.a.property('emit');
        baseStream.emit.should.be.a('function');
    });
    it('should have method .end()', function() {
        baseStream.should.have.a.property('end');
        baseStream.end.should.be.a('function');
    });
    it('should have method .onValue()', function() {
        baseStream.should.have.a.property('onValue');
        baseStream.onValue.should.be.a('function');
    });
    it('should have method .onAny()', function() {
        baseStream.should.have.a.property('onAny');
        baseStream.onAny.should.be.a('function');
    });
    it('should have method .onEnd()', function() {
        baseStream.should.have.a.property('onEnd');
        baseStream.onEnd.should.be.a('function');
    });
    it('should have method .offValue()', function() {
        baseStream.should.have.a.property('offValue');
        baseStream.offValue.should.be.a('function');
    });
    it('should have method .offAny()', function() {
        baseStream.should.have.a.property('offAny');
        baseStream.offAny.should.be.a('function');
    });
    it('should have method .offEnd()', function() {
        baseStream.should.have.a.property('offEnd');
        baseStream.offEnd.should.be.a('function');
    });
    it('should have method .map()', function() {
        baseStream.should.have.a.property('map');
        baseStream.map.should.be.a('function');
    });
    it('should have method .mapTo()', function() {
        baseStream.should.have.a.property('mapTo');
        baseStream.mapTo.should.be.a('function');
    });
    it('should have method .invoke()', function() {
        baseStream.should.have.a.property('invoke');
        baseStream.invoke.should.be.a('function');
    });
    it('should have method .pluck()', function() {
        baseStream.should.have.a.property('pluck');
        baseStream.pluck.should.be.a('function');
    });
    it('should have method .not()', function() {
        baseStream.should.have.a.property('not');
        baseStream.not.should.be.a('function');
    });
    it('should have method .timestamp()', function() {
        baseStream.should.have.a.property('timestamp');
        baseStream.timestamp.should.be.a('function');
    });
    it('should have method .tap()', function() {
        baseStream.should.have.a.property('tap');
        baseStream.tap.should.be.a('function');
    });
    it('should have method .filter()', function() {
        baseStream.should.have.a.property('filter');
        baseStream.filter.should.be.a('function');
    });
    it('should have method .take()', function() {
        baseStream.should.have.a.property('take');
        baseStream.take.should.be.a('function');
    });
    it('should have method .takeWhile()', function() {
        baseStream.should.have.a.property('takeWhile');
        baseStream.takeWhile.should.be.a('function');
    });
    it('should have method .skip()', function() {
        baseStream.should.have.a.property('skip');
        baseStream.skip.should.be.a('function');
    });
    it('should have method .skipWhile()', function() {
        baseStream.should.have.a.property('skipWhile');
        baseStream.skipWhile.should.be.a('function');
    });
    it('should have method .skipDuplicates()', function() {
        baseStream.should.have.a.property('skipDuplicates');
        baseStream.skipDuplicates.should.be.a('function');
    });
    it('should have method .diff()', function() {
        baseStream.should.have.a.property('diff');
        baseStream.diff.should.be.a('function');
    });
    it('should have method .scan()', function() {
        baseStream.should.have.a.property('scan');
        baseStream.scan.should.be.a('function');
    });
    it('should have method .reduce()', function() {
        baseStream.should.have.a.property('reduce');
        baseStream.reduce.should.be.a('function');
    });
    it('should have method .mapEnd()', function() {
        baseStream.should.have.a.property('mapEnd');
        baseStream.mapEnd.should.be.a('function');
    });
    it('should have method .skipEnd()', function() {
        baseStream.should.have.a.property('skipEnd');
        baseStream.skipEnd.should.be.a('function');
    });
    it('should have method .slidingWindow()', function() {
        baseStream.should.have.a.property('slidingWindow');
        baseStream.slidingWindow.should.be.a('function');
    });
    it('should have method .bufferWhile()', function() {
        baseStream.should.have.a.property('bufferWhile');
        baseStream.bufferWhile.should.be.a('function');
    });
    it('should have method .delay()', function() {
        baseStream.should.have.a.property('delay');
        baseStream.delay.should.be.a('function');
    });
    it('should have method .throttle()', function() {
        baseStream.should.have.a.property('throttle');
        baseStream.throttle.should.be.a('function');
    });
    it('should have method .debounce()', function() {
        baseStream.should.have.a.property('debounce');
        baseStream.debounce.should.be.a('function');
    });
    it('should have method .flatten()', function() {
        baseStream.should.have.a.property('flatten');
        baseStream.flatten.should.be.a('function');
    });
    it('should have method .transduce()', function() {
        baseStream.should.have.a.property('transduce');
        baseStream.transduce.should.be.a('function');
    });
    it('should have method .withHandler()', function() {
        baseStream.should.have.a.property('withHandler');
        baseStream.withHandler.should.be.a('function');
    });

    describe('.end()', function() {
        var fn = function() {};
        it('should return same object', function() {
            baseStream.end().should.be.an.instanceof(BaseStream);
        });
    });
    describe('.onValue()', function() {
        var fn = function() {};
        it('should return same object', function() {
            baseStream.onValue(fn).should.be.an.instanceof(BaseStream);
        });
        it('should pass value argument to callback', function() {
            var stream = new BaseStream();
            var spy = sinon.spy();
            stream.onValue(spy);
            stream.emit(42);
            spy.called.should.be.equal(true);
            spy.calledWith(42).should.be.equal(true);
            delete spy;
            delete stream;
        });
    });

    describe('.onAny()', function() {
        var fn = function() {};
        it('should return same object', function() {
            baseStream.onAny(fn).should.be.an.instanceof(BaseStream);
        });
        it('should be called on any baseStream event', function() {
            spy = sinon.spy();
            stream = new BaseStream();
            after(function() {
                delete spy;
                delete stream;
            });
            stream.onAny(spy);
            stream.emit(42);
            spy.called.should.be.equal(true);
            stream.end();
            spy.callCount.should.be.equal(2);
        });
    });

    describe('.onEnd()', function() {
        var fn = function() {};
        it('should return same object', function() {
            baseStream.onEnd(fn).should.be.an.instanceof(BaseStream);
        });
        it('should be called only on baseStream end event', function() {
            var spy = sinon.spy();
            stream = new BaseStream();
            stream.onEnd(spy);
            stream.emit(42);
            spy.called.should.be.equal(false);
            stream.end();
            spy.called.should.be.equal(true);
            spy.callCount.should.be.equal(1);
        });
    });

    describe('.offValue()', function() {
        var fn = function() {};
        it('should return same object', function() {
            baseStream.offValue(fn).should.be.an.instanceof(BaseStream);
        });
        it('should unsubscribe listener from .onValue()', function() {
            var stream = new BaseStream();
            var spy = sinon.spy();

            stream.onValue(spy);
            stream.offValue(spy);
            stream.emit(42);
            spy.called.should.be.equal(false);
        });
    });

    describe('.offAny()', function() {
        var fn = function() {};
        it('should return same object', function() {
            baseStream.offAny(fn).should.be.an.instanceof(BaseStream);
        });
        it('should unsubscribe listener from .onAny()', function() {
            var stream = new BaseStream();
            var spy = sinon.spy();

            stream.onAny(spy);
            stream.offAny(spy);

            stream.emit(42);
            stream.end();
            spy.called.should.be.equal(false);
        });
    });

    describe('.offEnd()', function() {
        var fn = function() {};
        it('should return same object', function() {
            baseStream.offEnd(fn).should.be.an.instanceof(BaseStream);
        });
        it('should unsubscribe listener from .onEnd()', function() {
            var stream = new BaseStream();
            var spy = sinon.spy();

            stream.onEnd(spy);
            stream.offEnd(spy);

            stream.end();
            spy.called.should.be.equal(false);
        });
    });

    describe('.to()', function() {
        var stream = null;
        var parentStream = null;
        before(function() {
            stream = new BaseStream();
            parentStream = new BaseStream();
        });

        after(function() {
            delete stream;
            delete parentStream;
        });

        it('should return same object', function() {
            parentStream.to(stream).should.be.an.instanceof(BaseStream);
        });
        it('should subscribe child on parent event', function() {
            var spy = sinon.spy();
            stream.onValue(spy);
            parentStream.emit(42);
            spy.called.should.be.equal(true);
        });
    });
    describe('.from()', function() {
        var stream = null;
        var parentStream = null;
        before(function(){
            stream = new BaseStream();
            parentStream = new BaseStream();
        });

        after(function() {
            delete stream;
            delete parentStream;
        });
        it('should return same object', function() {
            stream.from(parentStream).should.be.an.instanceof(BaseStream);  
        });
        it('should subscribe child on parent event', function() {
            var spy = sinon.spy();
            stream.onValue(spy);
            parentStream.emit(42);
            spy.called.should.be.equal(true);
        });
    });

    describe('***observable methods***', function() {
        var stream = null;
        var fn = function(val) {};
        before(function(){
            stream = new BaseStream();
        });

        after(function() {
            delete stream;
        });
        describe('.map()', function() {
            it('should return stream object', function() {
                stream.map(fn).should.be.an.instanceof(BaseStream);
            });
        });

        describe('.mapTo()', function() {
            it('should return stream object', function() {
                stream.mapTo(fn).should.be.an.instanceof(BaseStream);
            });
        });

        describe('.invoke()', function() {
            it('should return stream object', function() {
                stream.invoke(fn).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.pluck()', function() {
            it('should return stream object', function() {
                stream.pluck(fn).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.not()', function() {
            it('should return stream object', function() {
                stream.not().should.be.an.instanceof(BaseStream);
            });
        });
        describe('.timestamp()', function() {
            it('should return stream object', function() {
                stream.timestamp().should.be.an.instanceof(BaseStream);
            });
        });
        describe('.tap()', function() {
            it('should return stream object', function() {
                stream.tap(fn).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.filter()', function() {
            it('should return stream object', function() {
                stream.filter(fn).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.take()', function() {
            it('should return stream object', function() {
                stream.take(3).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.takeWhile()', function() {
            it('should return stream object', function() {
                stream.takeWhile(fn).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.skip()', function() {
            it('should return stream object', function() {
                stream.skip(3).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.skipWhile()', function() {
            it('should return stream object', function() {
                stream.skipWhile(fn).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.skipDuplicates()', function() {
            it('should return stream object', function() {
                stream.skipDuplicates(fn).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.diff()', function() {
            it('should return stream object', function() {
                stream.diff(fn).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.scan()', function() {
            it('should return stream object', function() {
                stream.scan(fn).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.reduce()', function() {
            it('should return stream object', function() {
                stream.reduce(fn).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.mapEnd()', function() {
            it('should return stream object', function() {
                stream.mapEnd(fn).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.skipEnd()', function() {
            it('should return stream object', function() {
                stream.skipEnd().should.be.an.instanceof(BaseStream);
            });
        });
        describe('.slidingWindow()', function() {
            it('should return stream object', function() {
                stream.slidingWindow(4).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.bufferWhile()', function() {
            it('should return stream object', function() {
                stream.bufferWhile(fn).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.delay()', function() {
            it('should return stream object', function() {
                stream.delay(4).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.throttle()', function() {
            it('should return stream object', function() {
                stream.throttle(4).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.debounce()', function() {
            it('should return stream object', function() {
                stream.debounce(4).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.flatten()', function() {
            it('should return stream object', function() {
                stream.flatten(fn).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.transduce()', function() {
            it('should return stream object', function() {
                stream.transduce(fn).should.be.an.instanceof(BaseStream);
            });
        });
        describe('.withHandler()', function() {
            it('should return stream object', function() {
                stream.withHandler(4).should.be.an.instanceof(BaseStream);
            });
        });
    });

});