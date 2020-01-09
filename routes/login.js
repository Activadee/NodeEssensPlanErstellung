var express = require('express');
var router = express.Router();
const Admin = require('../model/Admin');
const User = require('../model/User');
const Koch = require('../model/Koch');
const jwt = require('jsonwebtoken');
const {checkLoginInput} = require('../validations');
const bcrypt = require('bcryptjs');
require('dotenv');


router.post('/', async (req, res, next) => {
    let generateToken = (user, secret) => {
        const u = {
            _id: user._id,
            username: user.username,
            vorname: user.vorname,
            nachname: user.nachname,
            email: user.email,
            nfcid: user.nfcid,
            role: secret.substring(21),
            logged_in: true
        };
        const token = jwt.sign(u, secret, {expiresIn: 3600 * 24 * 30});
        return {token, u}
    };
    // Alle Daten richtig eingegeben?
    const {value, error} = checkLoginInput(req.body);
    if (error) return res.status(400).json(error.details[0].message);
    // Gibt es einen Admin mit diesem Nutzernamen?
    let loginTry;
    if (!(loginTry = await Admin.findOne({username: req.body.username}))) {
        if (!(loginTry = await User.findOne({username: req.body.username}))) {
            if (!(loginTry = await Koch.findOne({username: req.body.username}))) {
                return res.status(400).json('niemand in der Datenbank')
            } else {
                const hPasswort = await bcrypt.compare(req.body.passwort, loginTry.passwort);
                if (!hPasswort) return res.status(400).json(' Passwort nicht richtig');
                // Token erstellen
                const token = generateToken(loginTry, process.env.TOKEN_KOCH);
                await res.json(token)
            }
        } else {

            const hPasswort = await bcrypt.compare(req.body.passwort, loginTry.passwort);
            if (!hPasswort) return res.status(400).send('Passwort nicht richtig');
            // Token erstellen
            const token = generateToken(loginTry, process.env.TOKEN_USER);
            await res.json(token)
        }
    } else {
        const hPasswort = await bcrypt.compare(req.body.passwort, loginTry.passwort);
        if (!hPasswort) return res.status(400).send('Passwort nicht richtig');
        // Token erstellen
        const token = generateToken(loginTry, process.env.TOKEN_ADMIN);
        await res.json(token)
    }
});

module.exports = router;