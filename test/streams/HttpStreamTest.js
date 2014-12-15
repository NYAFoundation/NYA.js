var chai = require('chai');
var mocha = require('mocha');
var should = chai.should();
var path = require('path');
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
	});
});