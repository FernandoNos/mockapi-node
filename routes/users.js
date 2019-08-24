var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/test', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET generic path*/
router.get(/(create)\/.*/, function(req, res, next){
  res.send('testing');
});

module.exports = router;
