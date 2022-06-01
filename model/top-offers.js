const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const topOffersSchema = new Schema({
    image: {
        type: String,
    },
title: {
        type: String,
        // 
		required: [true, 'Roll field is required']
    },
    price: {
        type: String,
        // deafult: true
    }
});



const topOffers = mongoose.model('TopOffers', topOffersSchema);
const readyToCook = mongoose.model('readyToCook',topOffersSchema);
const softDrinks = mongoose.model('softDrinks', topOffersSchema);

module.exports = {
	topOffers,
	readyToCook,
	softDrinks,
}