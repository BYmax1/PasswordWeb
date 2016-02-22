var express = require('express');
var router = express.Router();
var Info=require('../model/Info');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BYmax' });
});

router.post('/', function(req, res, next) {
    var newInfo=new Info(req.body['place'],
    	req.body['account'],req.body['password']);
    newInfo.save();
    res.redirect('./');
});

router.get('/all', function(req, res, next) {
 
  Info.getAll(function(Infos)
  	{
        res.render('all', { title: 'BYmax' , Infos:Infos});
  	});	
});


module.exports = router;
