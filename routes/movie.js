var express = require('express');
var router = express.Router();

var movie = require('./../models/movie');

router.get('/movie', function(req, res, next) {
	movie.fetch(function (err, movies) {
		if(err){
			console.log(err);
		}else{
			res.render('movie', {
				title: '电影首页',
				movies: movies
			});
		}
	});
});

module.exports = router;

