var express = require('express');
var router = express.Router();
const User = require('../../model/User');
require('dotenv').config();
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/', async (req, res, next) => {

    const user = await User.findOne({_id: req.body.id});
    user.vorname = req.body.vorname;
    user.passwort = user.passwort;
    user.nachname = req.body.nachname;
    user.email = req.body.email;
    user.essensplan = {};
    await user.save();

    res.status(200).send("alles Ok!");

});


module.exports = router;