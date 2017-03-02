var express = require('express');
var router = require('../app/routes.js');

/* GET users listing. */
router.get('/signup', function(req, res, next) {
  res.render('../views/signup.html');
});

module.exports = router;
