const express = require('express');
const bundule = require('../model/top-offers');
const router = express.Router();

const ready = bundule.readyToCook;

router.get('/ready-to-cook', function(req, res, next) {
    ready.find({}).then(function(tready) {
        res.send(tready);
    }).catch(next);
});

router.post('/ready-to-cook', function(req, res, next) {
    ready.create(req.body).then(function(ready) {
        res.send(ready);
    }).catch(next);
});

module.exports = router;