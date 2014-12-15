var chai = require('chai');
var mocha = require('mocha');
var should = chai.should();
var path = require('path');

var RouteStream = require('../../lib/Lib.js').RouteStream;
var BaseStream = require('../../lib/streams/BaseStream.js');

describe('RouteStream', function() {
	var r_stream = new RouteStream();
	it('should be a instance of BaseStream', function() {
		r_stream.should.be.an.instanceof(BaseStream);
	});
});