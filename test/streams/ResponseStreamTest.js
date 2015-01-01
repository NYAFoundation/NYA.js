var chai = require('chai');
var mocha = require('mocha');
var should = chai.should();
var path = require('path');

var ResponseStream = require('../../lib/Lib.js').ResponseStream;
var BaseStream = require('../../lib/streams/BaseStream.js');

describe('ResponseStream', function() {
	var r_stream = new ResponseStream();
    var r_stream2 = ResponseStream();
	it('should be a instance of BaseStream', function() {
		r_stream.should.be.an.instanceof(BaseStream);
        r_stream2.should.be.an.instanceof(BaseStream);
        r_stream.should.be.an.instanceof(ResponseStream);
        r_stream2.should.be.an.instanceof(ResponseStream);
	});
    it('should pipe if from is present', function() {
        var anotherStream = new ResponseStream(new BaseStream());
        anotherStream.origin.should.be.not.equal(null);
    });
});