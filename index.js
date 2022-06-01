const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require("cors");



const app = express();
const port = process.env.PORT || 5000;


mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to mongodb atlaas");
});
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/api'));
app.use('/api',require('./routes/readyToCook'));
app.use('/api',require('./routes/softDrinks'))

app.use((req,res,next)=>{
    res.setHeader('Acces-Control-Allow-Origin','*');
    res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
    next(); 
})

app.use(function(err, req, res, next) {
    res.status(422).send({ error: err.message });
});

app.listen(port, function() {
    console.log(`Started up at port ${port}`);
});