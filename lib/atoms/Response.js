'use strict';
var Response = function Response(from) {
    if (this instanceof Response) {
        this.from = from;
        return this;
    }
    return new Response(from);
};

module.exports = Response;