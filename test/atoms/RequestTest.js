var chai = require('chai');
var mocha = require('mocha');
var should = chai.should();
var Request = require('../../lib/atoms/Request.js');

describe('Request', function() {
	var request = new Request();
	var anotherRequest = Request();
	it('should be instanceof Request', function() {
		request.should.be.an.instanceof(Request);
		anotherRequest.should.be.an.instanceof(Request);
	});
	it('should have property url', function() {
		request.should.have.a.property('url');
	});
	it('should have property route', function() {
		request.should.have.a.property('route');
	});
	it('should have property method', function() {
		request.should.have.a.property('method');
	});
	it('should have property type', function() {
		request.should.have.a.property('type');
	});
	it('should have property headers', function() {
		request.should.have.a.property('headers');
	});
	it('should have property data', function() {
		request.should.have.a.property('data');
	});
	it('should have property res', function() {
		request.should.have.a.property('res');
	});
	it('should have property contentType', function() {
		request.should.have.a.property('contentType');
	});
});