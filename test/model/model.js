var assert = require('assert');
var Model= require('../../src/model/Model.js');


var model = new Model('test', 'pg');

describe('Model', function() {
	describe('#find', function() {
		it('should return model instance', function() {
			assert.equal(model.find(function(){}) instanceof Model, true);
			assert.equal(model.find(function(){}).name, model.name);
		});
	});
	describe('#save', function() {
		it('should save without error', function() {
			var modelToSave = model.find(function(ins) { return ins.id == 1});
			modelToSave.id = 2;
			assert.equal(modelToSave.save().id, modelToSave.id);
		});
	});
	describe('#order', function() {
		it('should change __order field of model and return model instance', function(){
			assert.equal(model.order('id ASC'), model);
			assert.equal(model.order('id DESC'), model);
			assert.equal(model.order('id ASC').__order, model.__order);
			assert.equal(model.order('id DESC').__order, 'id DESC');
		});
	});
	describe('#getJSON', function() {
		it('should return JSON representation of Model', function() {
			var modelForJSON = new Model('test', 'pg');
			modelForJSON.id = 1;
			assert.equal(modelForJSON.getJSON(true), JSON.stringify({id : 1}));
			assert.deepEqual(modelForJSON.getJSON(), {id:1});
		});
	});
	describe("#fetchData", function() {
		it('should be consistent', function() {
			var modelForFetching = new Model('test', 'pg');
			var dataObj = { id: 1, first_name: 'John' };
			modelForFetching.fetchData(dataObj);

			assert.equal(modelForFetching.id, dataObj.id);
			assert.equal(modelForFetching.first_name, dataObj.first_name);
		});
		it('should return same model instance', function(){
			var modelForFetching = new Model('test', 'pg');
			modelForFetching.__label = 'test';
			modelForFetching.fetchData({a: 1, b: 1, c: 3});

			assert.equal(modelForFetching.__label, 'test');
		});
	});
});