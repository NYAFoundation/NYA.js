var chai = require('chai');
var mocha = require('mocha');
var should = chai.should();
var path = require('path');

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


    describe('.onValue()', function() {
        var fn = function() {};
        it('should return same object', function() {
            baseStream.onValue(fn).should.be.an.instanceof(BaseStream);
        });
    });

    describe('.onAny()', function() {
        var fn = function() {};
        it('should return same object', function() {
            baseStream.onAny(fn).should.be.an.instanceof(BaseStream);
        });
    });

    describe('.onEnd()', function() {
        var fn = function() {};
        it('should return same object', function() {
            baseStream.onEnd(fn).should.be.an.instanceof(BaseStream);
        });
    });

    describe('.offValue()', function() {
        var fn = function() {};
        it('should return same object', function() {
            baseStream.offValue(fn).should.be.an.instanceof(BaseStream);
        });
    });

    describe('.offAny()', function() {
        var fn = function() {};
        it('should return same object', function() {
            baseStream.offAny(fn).should.be.an.instanceof(BaseStream);
        });
    });

    describe('.offEnd()', function() {
        var fn = function() {};
        it('should return same object', function() {
            baseStream.offEnd(fn).should.be.an.instanceof(BaseStream);
        });
    });

    describe('.to()', function() {
        var stream = null;
        before(function() {
            stream = new BaseStream();
        });

        after(function() {
            delete stream;
        });

        it('should return same object', function() {
            baseStream.to(stream).should.be.an.instanceof(BaseStream);
        })
    });
    describe('.from()', function() {
        var stream = null;
        before(function(){
            stream = new BaseStream();
        });

        after(function() {
            delete stream;
        });
        it('should return same object', function() {
            baseStream.to(stream).should.be.an.instanceof(BaseStream);  
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
            it('should return kefir emitter', function() {
                stream.map(fn).should.have.a.property('_subscribers');
            });
        });

        describe('.mapTo()', function() {
            it('should return kefir emitter', function() {
                stream.mapTo(fn).should.have.a.property('_subscribers');
            });
        });

        describe('.invoke()', function() {
            it('should return kefir emitter', function() {
                stream.invoke(fn).should.have.a.property('_subscribers');
            });
        });
    });

});