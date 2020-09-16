var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello fellow boba lovers, sending love to you from the backend server');
});

module.exports = router;
