var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rhino Sites' });
});
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Rhino Sites' });
});
module.exports = router;
