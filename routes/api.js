const express = require("express");
const bundule = require("../model/top-offers");
const router = express.Router();

const topOffers = bundule.topOffers;

router.get("/top-offers", function (req, res, next) {
  topOffers
    .find({})
    .then(function (topOfferss) {
      res.send(topOfferss);
    })
    .catch(next);
});

router.post("/top-offers", function (req, res, next) {
  topOffers
    .create(req.body)
    .then(function (topOffers) {
      res.send(topOffers);
    })
    .catch(next);
});
router.delete("/top-offers/:name/:roll", function (req, res, next) {
  topOffers
    .findOneAndDelete({ name: req.params.name, roll: req.params.roll })
    .then(function (topOffers) {
      res.send(topOffers);
    });
});

router.put("/top-offerss/:name/:roll", function (req, res, next) {
  const topOffers = req.body;
  topOffers
    .findOneAndUpdate(
      { name: req.params.name, roll: req.params.roll },
      topOffers
    )
    .then(function (topOffers) {
      res.send({ message: "topOffers has been updated" });
    });
});

module.exports = router;
