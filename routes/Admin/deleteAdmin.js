var express = require('express');
var router = express.Router();
const Admin = require('../../model/Admin');
const {checkUserInput} = require('../../validations');
const bcrypt = require('bcryptjs');


router.post('/', async (req, res, next) => {
    await Admin.deleteOne({_id: req.body.id});
    res.status(200).send()


});

module.exports = router;