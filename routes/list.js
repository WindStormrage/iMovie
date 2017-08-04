var express = require('express');
var router = express.Router();

router.get('/admin/list', function(req, res, next) {
	res.render('list', {
		title: '电影添加'
	});
});

module.exports = router;

