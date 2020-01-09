var express = require('express');
var router = express.Router();
const User = require('../../model/User');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/', async (req, res, next) => {
    const user = await User.findOne({_id: req.body.id});
    user.username = user.username;
    user.vorname = user.vorname;
    user.nachname = user.nachname;
    user.email = req.body.email !== "" ? req.body.email : user.email;
    user.passwort = req.body.passwort !== "" ? await bcrypt.hash(req.body.passwort, 10) : user.passwort;
    await user.save();
    res.status(200).send("alles Ok!")

});


module.exports = router;