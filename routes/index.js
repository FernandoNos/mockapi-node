var express = require('express');
var router = express.Router();
var mockManager = require('../services/mockManagerService')

/* GET home page. */
router.get(/.+/, function(req, res, next) {
  res.send(mockManager.getMock(req.path));
});

module.exports = router;
