var express = require('express');
var router = express.Router();
const Admin = require('../../model/Admin');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const {changeAdminInput} = require("../../validations");
require('dotenv').config();

router.post('/', async (req, res, next) => {
    const admin = await Admin.findOne({_id: req.body.id});
    const {value, error} = changeAdminInput(req.body);
    console.log(error);
    if (error) return res.status(400).send(error.details[0].message);
    admin.vorname = req.body.vorname;
    admin.passwort = admin.passwort;
    admin.nachname = req.body.nachname;
    admin.email = req.body.email;
    await admin.save();
    res.status(200).send("alles Ok!");


});


module.exports = router;