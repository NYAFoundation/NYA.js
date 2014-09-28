pg = require('pg');
Adapter = require('./Adapter.js');

var PgAdapter = function(config) {
	this.config = config;
	this.conString = this.createConString(config);
}

PgAdapter.prototype = Adapter;

PgAdapter.prototype.createConString = function() {
	return "postgres://" + this.config['user'] + ":" 
	+ this.config['pass'] + '@' 
	+ this.config['host'] + "/" 
	+ this.config['db'];
}

PgAdapter.prototype.execute = function(query) {
	if (typeof query != 'string') {
		query = "SELECT 'connection'";
	}
	var ad = this;

	var client = new  pg.Client(this.conString);
	client.connect(function(err) {
		if (err) {
			return console.error('error fetching client from pool', err);
		}
		var res = client.query('SELECT 1 AS number', [], function(err, result) {
			if (err) {
				return console.error('error running query', err);
			}
			ad.result =  result.rows;
			console.log(ad.result);
			client.end();
			return ad.result;
		});
		console.log(ad.result);
		return ad.result;
	});
	return ad.result;
};

module.exports = PgAdapter;