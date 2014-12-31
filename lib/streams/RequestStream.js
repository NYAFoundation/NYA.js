'use strict';
var BaseStream = require('./BaseStream.js');

var RequestStream = function RequestStream(type, options) {
    if (options === undefined) {
        options = {};
    }
    var self = this,
        port = options.port || 3000,
        host = options.host,
        httpStream = require('./HttpStream.js')(port, host);

    if (self instanceof RequestStream) {
        this.init();
        self.type = type;
        self.options = options;
        if (type === undefined) {
            return self;
        }

        if (type === 'http') {
            self.from(httpStream);
            return self;
        }

        if (type === 'socket') {
            return self;
        }

        return self;
    }
    return new RequestStream(type);

};

RequestStream.prototype.type = null;
RequestStream.prototype.options = null;

RequestStream.prototype = new BaseStream();

RequestStream.prototype.handleRoute = function handleRoute(route) {
    if (typeof route === 'function') {
        return {
            predicate : route
        };
    }

    if (typeof route === 'string') {
        var regex = new RegExp(route),
            p = function genericPredicate(val) {
                return regex.test(val.url);
            };
        return {
            predicate : p,
            url : route,
            regex : regex
        };
    }
};



module.exports = RequestStream;