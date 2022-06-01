const express = require('express');

const router = express.Router();

router.get("/", function(req, res, next) {
    res.send({
        message: "This is the initial route"
    });
});