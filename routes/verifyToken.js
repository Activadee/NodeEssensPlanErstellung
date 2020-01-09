jwt = require('jsonwebtoken');
require('dotenv').config();

function cookOrAdmin(req, res, next) {
    const token = req.header('token');
    if (!token) return res.status(401).send('HAAAAALT');
    try {
        const verify = jwt.verify(token, process.env.TOKEN_ADMIN);
        if (verify) next()
    } catch (err) {
        try {
            const verify = jwt.verify(token, process.env.TOKEN_KOCH);
            if (verify) next()
        } catch (e) {
            console.log(e)
            res.status(400).send('Falscher Token');

        }
    }
}


function userVerify(req, res, next) {
    const token = req.header('token');
    if (!token) return res.status(401).send('HAAAAALT');
    try {
        const verify = jwt.verify(token, process.env.TOKEN_USER);
        if (verify) next()
    } catch (err) {
        res.status(400).send('Falscher Token');
    }


}

function kochVerify(req, res, next) {

    const token = req.header('token');
    if (!token) return res.status(401).send('HAAAAALT');
    try {
        const verify = jwt.verify(token, process.env.TOKEN_KOCH);
        if (verify) next()
    } catch (err) {
        res.status(400).send('Falscher Token');
    }


}

function adminVerify(req, res, next) {
    const token = req.header('token') || req.body.headers.token;
    if (!token) return res.status(401).send('HAAAAALT');
    try {
        const verify = jwt.verify(token, process.env.TOKEN_ADMIN);
        if (verify) next()
    } catch (err) {
        res.status(400).header('Falscher Token');
    }

}

module.exports.adminVerify = adminVerify;
module.exports.kochVerify = kochVerify;
module.exports.userVerify = userVerify;
module.exports.cookOrAdmin = cookOrAdmin;