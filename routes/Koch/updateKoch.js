var express = require('express');
var router = express.Router();
const Koch = require('../../model/Koch');
require('dotenv').config();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {changeKochInput} = require('../../validations');

router.post('/', async (req, res, next) => {
    const {value, error} = changeKochInput(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const koch = await Koch.findOne({_id: req.body.id});
    koch.vorname = req.body.vorname;
    koch.passwort = koch.passwort;
    koch.nachname = req.body.nachname;
    koch.email = req.body.email;
    await koch.save();
    res.status(200).send("alles Ok!")

});


module.exports = router;