var express = require('express');
var router = express.Router();
const Admin = require('../../model/Admin');
const {checkAdminInput} = require('../../validations');
const bcrypt = require('bcryptjs');


router.post('/', async (req, res, next) => {
    // Alle Daten richtig eingegeben?
    const {value, error} = checkAdminInput(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // Gibt es einen Admin mit diesem Nutzernamen?
    const exist = await Admin.findOne({username: req.body.username});
    if (exist) return res.status(400).send('Es gibt bereits den Nutzer');
    // Paswort Hash
    const hashed = await bcrypt.hash(req.body.passwort, 10);
    const admin = new Admin({
        username: req.body.username,
        vorname: req.body.vorname,
        nachname: req.body.nachname,
        email: req.body.email,
        passwort: hashed
    });
    try {
        await admin.save();
        res.send({user: admin._id})
    } catch (e) {
        res.status(400).send()
    }
});

module.exports = router;