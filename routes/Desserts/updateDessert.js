var express = require('express');
var router = express.Router();
const Dessert = require('../../model/Dessert');
require('dotenv').config();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {changeDessertInput} = require('../../validations');

router.post('/', async (req, res, next) => {
    const {value, error} = changeDessertInput(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const dessert = await Dessert.findOne({_id: req.body.id});
    dessert.name = req.body.name;
    dessert.kcal = req.body.kcal;
    dessert.kohlenhydrate = req.body.kohlenhydrate;
    dessert.fett = req.body.fett;
    dessert.eiweiss = req.body.eiweiss;
    dessert.salz = req.body.salz;
    await dessert.save();
    res.status(200).send("alles Ok!")

});


module.exports = router;