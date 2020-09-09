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

/*GET QRPayment Page*/ 
router.get('/qrpayment', function(req, res, next) {
  res.render('qrPayment', { title: 'QR Payment'});
});

/*GET QRPayment Page*/ 
router.get('/snap', function(req, res, next) {
  res.render('snap', { title: 'Payment Detail'});
});

module.exports = router;
