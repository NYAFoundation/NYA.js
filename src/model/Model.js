var Model = function() {
	var self = this;
	self.init();	
}


Model.prototype.id = null;
Model.prototype.__name = '';


Model.prototype.init = function(name, adapter) {
	var self = this;
	self.__adapter = adapter;
	self.__criteria = null;
	self.__order = null;
	self.__name = name;
}

Model.prototype.find = function(criteria) {
	var instance = new Model(this.__name, this.__adapter);
	instance.__criteria = criteria;
	return instance;
}

Model.prototype.save = function() {
	return this;
}

Model.prototype.update = function() {

}

Model.prototype.delete = function() {
	
}

Model.prototype.order = function(order) {
	this.__order = order;
	return this;
}

Model.prototype.execute = function(query) {
	var self = this;
	var data = null;
	if (typeof query == 'undefined') {
		data = self.__adapter.execute(self.generateQuery());
	}
	data = self.__adapter.execute(query);
	self.fetchData(data);
	return self;
}

Model.prototype.fetchData = function(data) {
	for (var key in data) {
		this[key] = data[key];
	}
	return this;
}

Model.prototype.generateQuery = function() {
	return self.__adapter.generateQuery(this);
}

Model.prototype.feed = function(criteria) {

}

Model.prototype.on = function(event, listener) {

}

Model.prototype.getJSON = function(stringify) {
	var json = {};
	for (var key in this) {
		if (typeof this[key] != 'function' && (key.search('__') === -1 || key.search('__') > 0)) {
			json[key] = this[key];
		}
	}
	if (stringify) {
		return JSON.stringify(json);
	}
	return json;
}

module.exports = Model