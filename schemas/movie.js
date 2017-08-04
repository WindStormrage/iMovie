var mongooes = require('mongoose');

var movieSchema = new mongooes.Schema({
	_id: Number,
	url: String,
	name: String,
	introduce: String,
	date: String,
	people: Number,
	type: String,
	act: String,
	country: String,
	language: String,
	long: String,
	address: String,
	director: String
});

movieSchema.statics = {
	fetch: function (cd) {
		return this
			.find({})
			.sort('_id')
			.exec(cd)
	},
	findById: function (id, cd) {
		return this
			.findOne({_id: id})
			.exec(cd)
	}
};

module.exports = movieSchema;