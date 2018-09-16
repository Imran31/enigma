var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/level1', function(req, res, next) {
  if(req.body.code === "devilsown") {
    res.send("Yes");
  }
  else {
    res.send("No");
  }
})

module.exports = router;
