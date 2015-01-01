# NYA Framework
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
 
 
//Create your first stream
app = new nya.RequestStream();
 
 
//Bind listener to all urls begins from "/"
app.get('/', function(request) {
	request.write('NYA!!!');
});
 
//Start your server
app.start();
```
## Links

- [Wiki](https://github.com/NYAFoundation/NYA.js/wiki) 
- [NPM](https://www.npmjs.com/package/nya)
