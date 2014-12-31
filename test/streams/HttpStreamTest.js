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
		var anotherStream = new HttpStream();
		httpStream.should.be.an.instanceof(BaseStream);
		anotherStream.should.be.an.instanceof(BaseStream);
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
		var stream = new HttpStream();
		it('should return same object', function() {
			stream.listen().should.be.an.instanceof(HttpStream);
		});
		it('should start http server', function(done) {
			stream.http.should.be.not.equal(null);
			stream.listen();
			stream.http.close(function() {
				done();
				// an_stream.listen();
				// an_stream.http.close(function() {
				// 	// loc_stream.listen(3002, '127.0.0.1');
				// 	// loc_stream.http.close(function() {
				// 	// 	done();			
				// 	// });
				// })
			});
		});
		it('should start http server on specifed port', function(done) {
			var stream = new HttpStream();
			stream.listen(3004);
			stream.port.should.be.equal(3004);
			stream.http.close(function() {
				done();
			});
		});
		// it('should start http server on specifed host', function(done) {
		// 	var stream = new HttpStream();
		// 	stream.listen(3004, '192.168.1.1');
		// 	stream.port.should.be.equal(3004);
		// 	stream.http.close(function() {
		// 		done();
		// 	})
		// });
	});
	describe('.end()', function() {
		var stream = new HttpStream();
		before(function() {
			stream.listen(3002);
		});
		after(function() {
			delete stream;
		});
		it('should stop http server and set #http to null', function(done) {
			var an_stream = new HttpStream();
			an_stream.onEnd(function() {
				done();
			});
			stream.onEnd(function() {
				an_stream.listen(3002);
				an_stream.end();
			});
			stream.end();
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