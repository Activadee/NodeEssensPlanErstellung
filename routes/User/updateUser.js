var express = require('express');
var router = express.Router();
const User = require('../../model/User');
require('dotenv').config();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {changeUserInput} = require('../../validations');

router.post('/', async (req, res, next) => {
    const {value, error} = changeUserInput(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const user = await User.findOne({_id: req.body.id});
    user.vorname = req.body.vorname;
    user.passwort = user.passwort;
    user.nachname = req.body.nachname;
    user.email = req.body.email;
    await user.save();

    res.status(200).send("alles Ok!")

});


module.exports = router;