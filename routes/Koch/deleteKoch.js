var express = require('express');
var router = express.Router();
const Koch = require('../../model/Koch');
const {checkUserInput} = require('../../validations');
const bcrypt = require('bcryptjs');


router.post('/', async (req, res, next) => {
    await Koch.deleteOne({_id: req.body.id});
    res.status(200).send();


});

module.exports = router;