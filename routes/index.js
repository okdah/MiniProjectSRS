var express = require('express');
var router = require('../app/routes.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/home.html', { title: 'Express' });
});

module.exports = router;
