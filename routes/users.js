var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Register user.
router.post('/signup', function(req, res, next) {
  res.send({text: "test message"});
});

module.exports = router;
