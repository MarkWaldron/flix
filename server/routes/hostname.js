var express = require('express');
var router = express.Router();
var os = require('os');
var hostname = os.hostname().split('.');
module.exports = router;

router.get('/', function(req, res, next){
  res.send(hostname[0]);
})
