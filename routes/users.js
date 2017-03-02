var express = require('express');
var router = require('../app/routes.js');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('../views/login.html', { title: 'Express' });
});

module.exports = router;
