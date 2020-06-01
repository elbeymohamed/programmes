var express = require('express');
var router = express.Router();
var htmlDir ='./html';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'changement titre 2' });
});


router.get('/page1', function(req, res, next) {
  console.log(__dirname);
  res.sendfile(htmlDir+'/page1.html');
  //res.render('index', { title: 'Express apres changement' });
});

router.get('/form', function(req, res, next) {
  console.log(__dirname);
  res.sendfile(htmlDir+'/form.html');
 // res.render('index', { title: 'Express apres changement' });
});

router.get('/recherche', function(req, res, next) {
  console.log(__dirname);
  res.sendfile(htmlDir+'/recherche.html');
 // res.render('index', { title: 'Express apres changement' });
});
module.exports = router;
