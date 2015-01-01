'use strict';
var kefir = require('kefir');
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

RouteStream.prototype = new BaseStream();

RouteStream.prototype.onGet = function onGet(fn) {
        // console.log(x);
    var filter = this.filter(function getFilter(x) {
        return x.method === 'GET';
    });
    if (fn === undefined) {
        return filter;
    }
    filter.onValue(fn);
    return filter;
}

RouteStream.prototype.onPost = function onPost(fn) {
    var filter = this.filter(function postFilter(x) {
        return x.method === 'POST';
    });
    if (fn === undefined) {
        return filter;
    }
    filter.onValue(fn);
    return filter;
}

RouteStream.prototype.onPut = function onPut(fn) {
    var filter = this.filter(function putFilter(x) {
        return x.method === 'PUT';
    });
    if (fn === undefined) {
        return filter;
    }
    filter.onValue(fn);
    return filter;
}

RouteStream.prototype.onDelete = function onDelete(fn) {
    var filter = this.filter(function deleteFilter(x) {
        return x.method === 'DELETE';
    });
    if (fn === undefined) {
        return filter;
    }
    filter.onValue(fn);
    return filter;
}

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
}



module.exports = RouteStream;