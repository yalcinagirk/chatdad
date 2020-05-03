var express = require('express');
var router = express.Router();

/* GET chat home page. */
router.get('/chat', function(req, res, next) {
  console.log(req.user)
  res.render('chat');
});

module.exports = router;
