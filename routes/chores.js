var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET chores listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      "name": "Laundry",
      "date": "now"
    }
  ])
});

module.exports = router;
