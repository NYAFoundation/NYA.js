var chai = require('chai');
var mocha = require('mocha');
var should = chai.should();
var path = require('path');
var sinon = require('sinon');

var RouteStream = require('../../lib/Lib.js').RouteStream;
var BaseStream = require('../../lib/streams/BaseStream.js');
var HttpStream = require('../../lib/streams/HttpStream.js');
var Request = require('../../lib/atoms/Request.js');

describe('RouteStream', function() {
	var r_stream = new RouteStream();
    var h_stream = new HttpStream();
    var routes =  new RouteStream();
    var psR = new Request();
    psR.method = 'POST';
    var ptR = new Request();
    ptR.method = 'PUT';
    var dR = new Request();
    dR.method = 'DELETE';
    var gR = new Request();
    gR.method = 'GET';
    routes.from(h_stream);

	it('should be a instance of BaseStream', function() {
		r_stream.should.be.an.instanceof(BaseStream);
	});
    describe('.onGet()', function() {
        it('should emits only on GET requests', function() {
            var s = sinon.spy();
            routes.onGet(function(x) {
                x.method.should.be.equal('GET');
                s(x);
            });
            h_stream.emit(psR);
            h_stream.emit(ptR);
            h_stream.emit(dR);
            h_stream.emit(gR);
            s.calledOnce.should.be.equal(true);
            s.calledWith(gR).should.be.equal(true);
            delete s;
        });
    });
    describe('.onPost()', function() {
        it('should emits only on POST requests', function() {
            var s = sinon.spy();
            routes.onPost(function(x) {
                x.method.should.be.equal('POST');
                s(x);
            });
            h_stream.emit(psR);
            h_stream.emit(ptR);
            h_stream.emit(dR);
            h_stream.emit(gR);
            s.calledOnce.should.be.equal(true);
            s.calledWith(psR).should.be.equal(true);
            delete s;
        });
    });
    describe('.onPut()', function() {
        it('should emits only on PUT requests', function() {
            var s = sinon.spy();
            routes.onPut(function(x) {
                x.method.should.be.equal('PUT');
                s(x);
            });
            h_stream.emit(psR);
            h_stream.emit(ptR);
            h_stream.emit(dR);
            h_stream.emit(gR);
            s.calledOnce.should.be.equal(true);
            s.calledWith(ptR).should.be.equal(true);
            delete s;
        });
    });
    describe('.onDelete()', function() {
        it('should emits only on PUT requests', function() {
            var s = sinon.spy();
            routes.onDelete(function(x) {
                x.method.should.be.equal('DELETE');
                s(x);
            });
            h_stream.emit(psR);
            h_stream.emit(ptR);
            h_stream.emit(dR);
            h_stream.emit(gR);
            s.calledOnce.should.be.equal(true);
            s.calledWith(dR).should.be.equal(true);
            delete s;
        });
    });
    describe('.onUrl()', function() {
        it('should emits only on PUT requests', function() {
            var s = sinon.spy();
            routes.onUrl('/testurl', function(x) {
                x.url.should.be.equal('/testurl');
                s(x);
            });
            h_stream.emit(psR);
            h_stream.emit(ptR);
            h_stream.emit(dR);
            h_stream.emit(gR);
            var url = new Request();
            url.url = '/testurl';
            h_stream.emit(url);
            s.calledOnce.should.be.equal(true);
            s.calledWith(url).should.be.equal(true);
            delete s;
        });
    });
});