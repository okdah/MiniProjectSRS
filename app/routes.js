var express = require('express');
var router = express.Router();
var portfolioController = require('./controllers/portfolio');
var workController = require('./controllers/work');
var registereduserController = require('./controllers/registereduser');


// add routes
router.get('/api/work/all', workController.getAllworks);
router.get('/api/work/:_id', function(req, res) {
    res.send(workController.getwork(req.params));
});
router.post('/api/work/', function(req, res) { 
	res.send(workController.creatework(req.param)) });


router.get('/api/portfolio/all', portfolioController.getAllportfolio);
router.get('/api/portfolio/:_id', function(req, res) {
    res.send(portfolioController.getportfolio(req.params));
});
router.post('/api/portfolio/', function(req, res) {
    res.send(portfolioController.createPortfolio(req.param))
}
);



router.get('/api/user/:_id', function(req, res) {
    res.send(registereduserController.getregistereduser(req.params));
});

router.get('/api/user/login/:name/:password', function(req, res) {
    res.send(registereduserController.login(req.params));
});

router.post('/api/user/signup/', function(req, res) {
    res.send(registereduserController.register(req.param))
});


// export router

module.exports = router;
