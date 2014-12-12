var http = require('http');
var kefir = require('kefir');

var RequestStream = function(type) {
	var self = this;
	self.emitter = kefir.emitter();
	self.server = http.createServer(function(req, res) {
		self.requestEmitter.call(self, this, self.handleRequest(req, res));
	});

}

var cat = [
'░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░',
'░░░░░░░░░░▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄░░░░░░░░░',
'░░░░░░░░▄▀░░░░░░░░░░░░▄░░░░░░░▀▄░░░░░░░',
'░░░░░░░░█░░▄░░░░▄░░░░░░░░░░░░░░█░░░░░░░',
'░░░░░░░░█░░░░░░░░░░░░▄█▄▄░░▄░░░█░▄▄▄░░░',
'░▄▄▄▄▄░░█░░░░░░▀░░░░▀█░░▀▄░░░░░█▀▀░██░░',
'░██▄▀██▄█░░░▄░░░░░░░██░░░░▀▀▀▀▀░░░░██░░',
'░░▀██▄▀██░░░░░░░░▀░██▀░░░░░░░░░░░░░▀██░',
'░░░░▀████░▀░░░░▄░░░██░░░▄█░░░░▄░▄█░░██░',
'░░░░░░░▀█░░░░▄░░░░░██░░░░▄░░░▄░░▄░░░██░',
'░░░░░░░▄█▄░░░░░░░░░░░▀▄░░▀▀▀▀▀▀▀▀░░▄▀░░',
'░░░░░░█▀▀█████████▀▀▀▀████████████▀░░░░',
'░░░░░░████▀░░███▀░░░░░░▀███░░▀██▀░░░░░░',
'░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░'
].join('\n');

RequestStream.prototype.init = function() {
	this.emitter = kefir.emitter();
}

RequestStream.prototype.listenersRegistry = [];

RequestStream.prototype.routes = [];


RequestStream.prototype.subscribe = function subscribeListener(callback, predicate) {
	var id = this.listenersRegistry.push(callback);

	route = this.handleRoute(predicate);

	if (typeof route !== 'undefined') {
		var router = this.emitter.filter(route.predicate);
		route['router'] = router;
		router.onValue(callback);
		this.routes[id] = route;
		return id;
	}

	this.emitter.onValue(callback);
	return id;
}


RequestStream.prototype.handleRoute = function(route) {
	if (typeof route == 'function') {
		return {
			predicate : route
		}
	}

	if (typeof route == 'string') {
		var regex = new RegExp(route);
		var p = function genericPredicate(val) {
			return regex.test(val.url);
		}
		return {
			predicate : p,
			url : route,
			regex : regex
		}
	}
}


RequestStream.prototype.route = function(method, route, callback) {
	var self = this;
	var route_p = self.handleRoute(route).predicate;

	var p = function(val) {
		return val.method == method && route_p(val);
	}
	self.subscribe(callback, p);
}


RequestStream.prototype.get = function(route, callback) {
	this.route('GET', route, callback);
}

RequestStream.prototype.post = function(route, callback) {
	this.route('POST', route, callback);
}

RequestStream.prototype.put = function(route, callback) {
	this.route('PUT', route, callback);
}

RequestStream.prototype.delete = function(route, callback) {
	this.route('DELETE', route, callback);
}


RequestStream.prototype.Request = function Request(request, response) {
	if (this instanceof Request) {
		var self = this;
		self.url = request.url;
		self.res = response;
		self.headers = request.headers;
		self.method = request.method;

		self.type = 'text/plain';
		self.code = 200;
		self.body = '';

		self.write = function(content) {
			self.res.writeHead(self.code, {
				'Content-Type' : self.type,
				'Content-Length' : 	content.length
			});
			self.res.write(content);
			self.res.end();
			console.log(self.method, self.code, self.url);
		}
		return this;		
	}
	return new Request(request, response);

}


RequestStream.prototype.requestEmitter = function(server, req, res) {
	this.emitter.emit(req);
}


RequestStream.prototype.handleRequest = function(request, response) {
	return new this.Request(request, response);
}


RequestStream.prototype.unsbscribe = function unsubscribeListener(lid) {
	if (typeof this.listenersRegistry[lid] == 'undefined') {
		throw Error('Test');
	}
}

RequestStream.prototype.start = function(host, port) {
	host = host || '127.0.0.1'
	port = port || 3000;
	console.log('Starting NYA server');
	console.log(cat);
	console.log('port:', port, 'host:', host);
	this.server.listen(port, host);
}

module.exports = RequestStream;