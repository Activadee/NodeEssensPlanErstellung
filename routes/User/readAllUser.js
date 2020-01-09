var express = require('express');
var router = express.Router();
const User = require('../../model/User');
require('dotenv').config();
const jwt = require('jsonwebtoken');
require('dotenv').config();


router.post('/', async (req, res, next) => {

    try {
        // const user = await jwt.verify(req.header('token'), process.env.TOKEN_ADMIN);
        await res.status(200).json(await User.find())
    } catch (e) {
        await res.status(401).json(e)

    }

});


module.exports = router;