var express = require('express');
var router = express.Router();
const Meal = require('../../model/Gericht');
const {checkUserInput} = require('../../validations');
const bcrypt = require('bcryptjs');


router.post('/', async (req, res, next) => {
    await Meal.deleteOne({_id: req.body.id});
    res.status(200).send();


});

module.exports = router;