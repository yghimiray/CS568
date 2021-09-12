var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([{email:'test@test.com'}]);
});

module.exports = router;
