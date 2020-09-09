var express = require('express');
var router = express.Router();
/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });

});
/*GET Payment Page*/ 
router.get('/menu', function(req, res, next) {
  res.render('menu', { title: 'menu'});
});

/*GET Payment Page*/ 
router.get('/detailTransaction', function(req, res, next) {
let now = new Date();
  res.render('detailTransaction', { title: 'detailTransaction', date: now});
});


module.exports = router;
