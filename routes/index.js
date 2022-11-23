
var express = require('express');
var router = express.Router();
const tweetController = require('../controller/tweetController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/tweet/create', tweetController.create_tweet)



module.exports = router;