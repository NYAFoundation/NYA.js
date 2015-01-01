var chai = require('chai');
var mocha = require('mocha');
var should = chai.should();
var path = require('path');

var RequestStream = require('../../lib/Lib.js').RequestStream;
var BaseStream = require('../../lib/streams/BaseStream.js');

describe('RequestStream', function() {
	var r_stream = new RequestStream();
    var r_stream2 = RequestStream();
	it('should be a instance of BaseStream', function() {
		r_stream.should.be.an.instanceof(BaseStream);
        r_stream2.should.be.an.instanceof(BaseStream);
        r_stream.should.be.an.instanceof(RequestStream);
        r_stream2.should.be.an.instanceof(RequestStream);
	});
});