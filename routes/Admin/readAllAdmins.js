var express = require('express');
var router = express.Router();
const Admin = require('../../model/Admin');
require('dotenv').config();
const jwt = require('jsonwebtoken');
require('dotenv').config();


router.post('/', async (req, res, next) => {

    try {
        await res.status(200).json(await Admin.find())
    } catch (e) {
        await res.status(401).json(e)

    }

});


module.exports = router;