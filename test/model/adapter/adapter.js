var Adapter = require('../../../src/model/adapter/Adapter.js');
var except = require('chai').expect;
describe('Adapter', function() {
	var ad = new Adapter();
	it('should have client property', function() {
		// assert.property(ad, 'client')
		except(ad).to.have.ownProperty('client');
	});
});