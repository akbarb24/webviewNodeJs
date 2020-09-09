var express = require('express');
var router = express.Router();
/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });

});
/*GET Payment Page*/ 
router.get('/payment', function(req, res, next) {
  res.render('payment', { title: 'Payment' , phonenumber: req.query.phonenumber});
});

/*GET Payment Page*/ 
router.get('/detailTransaction', function(req, res, next) {
  res.render('detailTransaction', { title: 'detailTransaction'});
});


module.exports = router;
