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

/*GET QRPayment Page*/ 
router.get('/qrpayment', function(req, res, next) {
  res.render('qrPayment', { title: 'QR Payment'});
});

/*GET QRPayment Page*/ 
router.get('/snap', function(req, res, next) {
  res.render('snap', { title: 'Payment Detail'});
});

module.exports = router;
