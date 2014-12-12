var NYA = function() {

}

NYA.prototype.lib = require('./lib/Lib.js');
NYA.prototype.RequestStream = NYA.prototype.lib.RequestStream;

module.exports = new NYA();