var chai = require('chai');
var mocha = require('mocha');
var should = chai.should();
var path = require('path');

var ResponseStream = require('../../lib/Lib.js').ResponseStream;
var BaseStream = require('../../lib/streams/BaseStream.js');

describe('ResponseStream', function() {
	var r_stream = new ResponseStream();
	it('should be a instance of BaseStream', function() {
		r_stream.should.be.an.instanceof(BaseStream);
	});
});