var express = require('express');
var router = express.Router();
const UserPlan = require('../../model/UserPlan');
require('dotenv').config();
const jwt = require('jsonwebtoken');
require('dotenv').config();


router.post('/', async (req, res, next) => {
    if (!req.body.id) {
        res.status(200).json("2");
    }
    else {
    try {
        plan = await UserPlan.find({KW: req.body.kw.toString(), userID: req.body.id})
        res.status(200).json(plan)

    } catch (e) {
        res.status(401).json(e)

    }
    }

});


module.exports = router;