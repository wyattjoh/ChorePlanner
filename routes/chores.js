var express = require('express');
var router = express.Router();
var moment = require('moment');

var chores = require('../resources/chores');

/* GET chores listing. */
router.get('/', function(req, res, next) {
  res.json(chores.fetch());
});

module.exports = router;
