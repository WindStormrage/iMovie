var express = require('express');
var router = express.Router();

var movie = require('./../models/movie');

router.post('/admin/add/newMovie', function(req, res, next) {
	movie.fetch(function (err, movies) {
		if(err){
			console.log(err);
		}else{
			var id = movies.length;
			id++;
			var date = new Date();
			var newMovie = new movie({
				"url" : req.body.movie.url,
				"name" : req.body.movie.name,
				"introduce" : req.body.movie.introduce,
				"type" : req.body.movie.type,
				"act" : req.body.movie.act,
				"country" : req.body.movie.country,
				"language" : req.body.movie.language,
				"long" : req.body.movie.long,
				"address" : req.body.movie.address,
				"director" : req.body.movie.director,
				"date" : date.getFullYear()+'/'+date.getMonth()+'/'+date.getDate(),
				"people" : 0,
				"_id" : id
			});
			newMovie.save(function (err, movie) {
				if(err){
					console.log(err);
				}else{
					console.log('添加成功！');
					res.redirect('/movie/'+id);
				}
			});
		}
	});

});

module.exports = router;

