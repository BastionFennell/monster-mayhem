var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/create', function(req, res, next) {
    var stripe = require("stripe")("sk_test_hJIMCTVT2KJC93erzRUCMnVV");

    stripe.orders.create({
        currency: 'usd',
        email: 'jenny@example.com',
        items: [
            {
                type: 'sku',
                parent: 'full-pass',
                quantity: 1
            }
        ]
    }, function(err, order) {
        // asynchronously called
        res.json(order);
    });
});

router.post('/pay', function(req, res, next) {
    var stripe = require("stripe")("sk_test_hJIMCTVT2KJC93erzRUCMnVV");

    var token = req.body.token;
    var orderId = req.body.orderId;

    stripe.orders.pay(orderId, {
        source: token.id
    }, function(err, order) {
        // called asynchronously
        res.json({success: true});
    });
});

module.exports = router;
