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
  res.render('detailTransaction', { title: 'detailTransaction', date: now, amount: req.query.amount});
});

/*GET QRPayment Page*/ 
router.get('/qrpayment', function(req, res, next) {
  res.render('qrPayment', { title: 'QR Payment'});
});

/*GET Snap Page*/ 
router.get('/snap', function(req, res, next) {
  res.render('snap', { title: 'Payment Detail'});
});

/*GET AlfaMartPayment Page*/ 
router.get('/alfamart', function(req, res, next) {
in  let token = Math.floor(100000 + Math.random() * 900000);
  res.render('alfamart', { title: 'alfamart', token: token, merchant: req.query.merchant});
});

/*GET Snap Page*/ 
router.get('/paymentDone', function(req, res, next) {
  res.render('paymentDone', { title: 'Payment Done'});
});

module.exports = router;
