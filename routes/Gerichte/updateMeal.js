var express = require('express');
var router = express.Router();
const Meal = require('../../model/Gericht');
require('dotenv').config();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {changeMealInput} = require('../../validations');

router.post('/', async (req, res, next) => {
    const {value, error} = changeMealInput(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const meal = await Meal.findOne({_id: req.body.id});
    meal.name = req.body.name,
        meal.kcal = req.body.kcal,
        meal.kohlenhydrate = req.body.kohlenhydrate,
        meal.fett = req.body.fett,
        meal.eiweiss = req.body.eiweiss,
        meal.salz = req.body.salz;
    await meal.save();
    res.status(200).send("alles Ok!")

});


module.exports = router;