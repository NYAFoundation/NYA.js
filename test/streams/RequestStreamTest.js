var chai = require('chai');
var mocha = require('mocha');
var should = chai.should();
var path = require('path');

var RequestStream = require('../../lib/Lib.js').RequestStream;

describe('RequestStream', function() {
	var r_stream = new RequestStream();
	it('should have method subscribe', function() {
		r_stream.should.have.property('subscribe');
	});
	describe('.subscribe()', function() {
		it('should return unique id of listener', function() {
			var callback = function(url, request) {};
			var listId1 = r_stream.subscribe(callback);
			var listId2 = r_stream.subscribe(callback);
			var listId3 = r_stream.subscribe(callback);
			listId1.should.be.an.integer;
			listId2.should.be.an.inetger;
			listId1.should.not.be.equal(listId2);
			listId2.should.not.be.equal(listId3);
			listId3.should.not.be.equal(listId1);
		});
	});
});