var express = require('express');
var router = express.Router();
var chores = require('../resources/chores');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chore Planner', chores: chores.fetch() });
});

module.exports = router;
