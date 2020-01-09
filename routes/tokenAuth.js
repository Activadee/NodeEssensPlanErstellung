const jwt = require("jsonwebtoken");
var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../model/User');
const Koch = require('../model/Koch');
const Admin = require('../model/Admin');

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
        const token = jwt.sign(u, secret, {expiresIn: 3600 * 24 * 14});
        return {token, u}
    };
    const token = req.header('token');
    if (!token) return res.status(401).json({result: 'Kein Token'});
    try {
        const verify = jwt.verify(token, process.env.TOKEN_ADMIN);
        req.user = await Admin.findOne({_id: verify._id});
        await res.json(generateToken(req.user, process.env.TOKEN_ADMIN))
    } catch (err) {
        try {
            const verify = jwt.verify(token, process.env.TOKEN_USER);
            req.user = await User.findOne({_id: verify._id}) ;
            await res.json(generateToken(req.user, process.env.TOKEN_USER))
        } catch (e) {
            try {
                const verify = jwt.verify(token, process.env.TOKEN_KOCH);
                req.user = await Koch.findOne({_id: verify._id});
                await res.json(generateToken(req.user, process.env.TOKEN_KOCH))
            } catch (e) {
                await res.status(400).json({
                    result:
                        {logged_in: false},
                    Error: e
                })
            }
        }

    }

});

module.exports = router;