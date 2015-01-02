'use strict';
var BaseStream = require('./BaseStream.js');

var RouteStream = function RouteStream(from) {
    if (this instanceof RouteStream) {
        this.init();
        if (from === undefined) {
            return this;
        }
        this.from(from);
        return this;
    }
    return new RouteStream(from);
};

function checkMethod (method, x) {
    return x.method === method;
};


RouteStream.prototype = new BaseStream();

RouteStream.prototype.onMethod = function(method, fn) {
    var filter = this.filter(function methodFilter(x){
        return checkMethod(method, x);
    });
    if (fn === undefined) {
        return filter;
    }
    filter.onValue(fn);
    return filter;
};

RouteStream.prototype.constructor = RouteStream;
RouteStream.prototype.onGet = function onGet(fn) {
    return this.onMethod('GET', fn);
};

RouteStream.prototype.onPost = function onPost(fn) {
    return this.onMethod('POST', fn);
};

RouteStream.prototype.onPut = function onPut(fn) {
    return this.onMethod('PUT', fn);
};

RouteStream.prototype.onDelete = function onDelete(fn) {
    return this.onMethod('DELETE', fn);
};

RouteStream.prototype.onUrl = function onUrl(url, fn) {
    var f = null;
    if (url instanceof RegExp) {
        f = url;
    } else {
        f = new RegExp(url);
    }

    var filter = this.filter(function urlFilter(x) {
        return f.test(x.url);
    });
    if (fn === undefined) {
        return filter;
    }
    filter.onValue(fn);
    return filter;
};



module.exports = RouteStream;