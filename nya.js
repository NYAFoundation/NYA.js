var NYA = function() {

}

NYA.prototype.lib = require('./lib/Lib.js');
NYA.prototype.RequestStream = NYA.prototype.lib.RequestStream;
NYA.prototype.HttpStream = NYA.prototype.lib.HttpStream;
NYA.prototype.ResponseStream = NYA.prototype.lib.ResponseStream;
NYA.prototype.RouteStream = NYA.prototype.lib.RouteStream;
NYA.prototype.CustomStream = NYA.prototype.lib.CustomStream;


module.exports = new NYA();