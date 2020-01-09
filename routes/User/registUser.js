var express = require('express');
var router = express.Router();
const User = require('../../model/User');
const {checkUserInput} = require('../../validations');
const bcrypt = require('bcryptjs');


router.post('/', async (req, res, next) => {
    // Alle Daten richtig eingegeben?
    const {value, error} = checkUserInput(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // Gibt es einen User mit dieser PNR?
    const exist = await User.findOne({username: req.body.username});
    if (exist) return res.status(400).send('Es gibt bereits den Nutzer');
    // Paswort Hash
    const hashed = await bcrypt.hash(req.body.passwort, 10);
    const user = new User({
        username: req.body.username,
        nfcid :req.body.nfcid,
        nachname: req.body.nachname,
        vorname: req.body.vorname,
        email: req.body.email,
        passwort: hashed
    });
    try {
        const savedUser = await user.save();
        res.send({user: user._id})
    } catch (e) {
        res.status(400).send(e)
    }
});

module.exports = router;