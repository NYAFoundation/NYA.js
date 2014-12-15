var chai = require('chai');
var mocha = require('mocha');
var should = chai.should();
var path = require('path');
var assert = require('assert');
var BaseStream = require('../../lib/streams/BaseStream.js');
var HttpStream = require('../../lib/Lib.js').HttpStream;


describe('HttpStream', function() {
	var httpStream = HttpStream();
	it('should be an instance of BaseStream', function() {
		httpStream.should.be.an.instanceof(BaseStream);
	});
	it('should have a property #http', function() {
		httpStream.should.have.a.property('http');
	});
	it('should have a method .listen()', function() {
		httpStream.should.have.a.property('listen');
		httpStream.listen.should.be.a('function');
	});
	it('should have a method .start()', function() {
		httpStream.should.have.a.property('start');
		httpStream.start.should.be.a('function');
	});
	describe('.listen()', function() {
		it('should return same object', function() {
			httpStream.listen(3001).should.be.an.instanceof(HttpStream);
		});
		it('should start http server', function() {
			httpStream.http.close(function() {
				httpStream.http.should.be.not.equal(null);
			});
		});
	});
	describe('.end()', function() {
		var stream = new HttpStream();
		before(function() {
			stream.listen(3002);
		});
		after(function() {
			delete stream;
		});
		it('should stop http server and set #http to null', function() {
			stream.end();
			stream.onEnd(function() {
				assert.equal(stream.http, null);
			});
		});
	});
	describe('.start()', function() {
		var stream = new HttpStream();
		after(function() {
			stream.end();
		});
		stream.start(3003).should.be.an.instanceof(HttpStream);
	});
});