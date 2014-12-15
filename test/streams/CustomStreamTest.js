var chai = require('chai');
var mocha = require('mocha');
var should = chai.should();
var path = require('path');

var CustomStream = require('../../lib/Lib.js').CustomStream;
var BaseStream = require('../../lib/streams/BaseStream.js');

describe('CustomStream', function() {
	var r_stream = new CustomStream();
	it('should be a instance of BaseStream', function() {
		r_stream.should.be.an.instanceof(BaseStream);
	});
});