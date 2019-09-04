var mockManager = require('../services/mockManagerService')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.send(mockManager.getAllMocks());
});

/* POST generic path*/
router.post(/(create)/, function(req, res, next){
  console.log(req.body.path)
  res.send('testing'+mockManager.saveMock(req.body));
  
});

module.exports = router;
