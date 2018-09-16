var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Das Spiel' });
});

router.get('/level2', function(req, res, next) {
  res.render('level2', { title: 'Meilleurs brioches'})
});

router.get('/level3', function(req, res, next) {
  res.render('level3', { title: 'All seeing'})
});

router.get('/end', function(req, res, next) {
  res.render('end', { title: 'The End'})
});

router.post('/level1', function(req, res, next) {
  if(req.body.code === "marx") {
    res.send("Yes");
  }
  else {
    res.send("No");
  }
});

router.post('/level2', function(req, res, next) {
  if(req.body.code === "shubra") {
    res.send("Yes");
  }
  else {
    res.send("No");
  }
});

router.post('/level3', function(req, res, next) {
  if(req.body.code === "devilsown") {
    res.send("Yes");
  }
  else {
    res.send("No");
  }
});

module.exports = router;
