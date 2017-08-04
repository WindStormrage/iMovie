var express = require('express');
var router = express.Router();

var movie = require('./../models/movie');

router.get('/movie/:id', function(req, res, next) {
	var id = req.params.id;
	movie.findById(id, function (err, movies) {
		if (err){
			console.log(err);
		}else{
			res.render('details', {
				title: '电影详情页'+id,
				movie: movies
			});
		}
	})

});

module.exports = router;
