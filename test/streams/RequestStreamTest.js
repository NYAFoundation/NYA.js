var chai = require('chai');
var mocha = require('mocha');
var should = chai.should();
var path = require('path');

var RequestStream = require('../../lib/Lib.js').RequestStream;
var BaseStream = require('../../lib/streams/BaseStream.js');

describe('RequestStream', function() {
	var r_stream = new RequestStream();
	it('should be a instance of BaseStream', function() {
		r_stream.should.be.an.instanceof(BaseStream);
	});
});