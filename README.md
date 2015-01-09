# NYA Framework

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/NYAFoundation/NYA.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency Status](https://david-dm.org/NYAFoundation/NYA.js.svg)](https://david-dm.org/NYAFoundation/NYA.js.svg)
[![devDependency Status](https://david-dm.org/NYAFoundation/NYA.js/dev-status.svg)](https://david-dm.org/NYAFoundation/NYA.js/dev-status.svg)
[![Code Climate](https://codeclimate.com/github/NYAFoundation/NYA.js/badges/gpa.svg)](https://codeclimate.com/github/NYAFoundation/NYA.js)
[![Build Status](https://travis-ci.org/NYAFoundation/NYA.js.svg?branch=v0.0.3)](https://travis-ci.org/NYAFoundation/NYA.js)

NYA - is a fullstack FRP framework for racket web based on kefir. No models, no controllers, no views - only streams and events.

## Instalation

```bash
  npm install nya
```

## Basic example

```javascript
//Import nya.js
var nya = require('nya');

var requests = new nya.RequestStream('http');

var routes = new nya.RouteStream(requests); //automatic pipe binding

var index = routes.onGet().onUrl('/');

var responses = nya.ResponseStream(index); //automatic pipe binding

responses.onValue(function(request) {
    request.res.writeHead(200, {
        'Content-Type' : 'text/plain',
    });
    request.res.write('NYA!');
    request.res.end();  
});
```
## Links

- [Wiki](https://github.com/NYAFoundation/NYA.js/wiki) 
- [NPM](https://www.npmjs.com/package/nya)
