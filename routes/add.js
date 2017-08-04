var express = require('express');
var router = express.Router();

router.get('/admin/add', function(req, res, next) {
	res.render('add', {
		title: '电影添加'
	});
});

module.exports = router;

