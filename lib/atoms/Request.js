'use strict';
var Request = function (from) {
    if (this instanceof Request) {
        this.from = from;
        return this;
    }
    return new Request(from);
};


Request.prototype.route = null;
Request.prototype.url = null;
Request.prototype.type = null;
Request.prototype.method = null;
Request.prototype.headers = null;
Request.prototype.data = null;
Request.prototype.res = null;
Request.prototype.contentType = null;

module.exports = Request;