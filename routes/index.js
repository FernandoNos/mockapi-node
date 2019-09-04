var express = require('express');
var router = express.Router();
var mockManager = require('../services/mockManagerService')

/* GET home page. */
router.get(/.+/, function(req, res, next) {
  res.send(mockManager.getMock(req.path,"GET"));
});

/* POST home page. */
router.post(/.+/, function(req, res, next) {
  res.send(mockManager.getMock(req.path,"POST"));
});

module.exports = router;
