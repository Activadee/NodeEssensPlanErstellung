var express = require('express');
var router = express.Router();
const Plan = require('../../model/Plan');
const {checkUserInput} = require('../../validations');
const bcrypt = require('bcryptjs');


router.post('/', async (req, res, next) => {
await Plan.deleteOne({_id: req.body.id}).then(res.status(200).send()).catch(res.status(401).send());


});

module.exports = router;