var express = require('express');
var router = express.Router();
const Plan = require('../../model/Plan');
require('dotenv').config();
const jwt = require('jsonwebtoken');
require('dotenv').config();


router.post('/', async (req, res, next) => {

    try {
        console.log(typeof (req.body.kw));
        const plan = await Plan.find(({KW: req.body.kw.toString()}))
        await res.status(200).json(plan)
    } catch (e) {
        console.log(e);
        await res.status(401).json(e)

    }

});


module.exports = router;