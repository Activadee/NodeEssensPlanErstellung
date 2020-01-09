var express = require('express');
var router = express.Router();
const User = require('../../model/User');
const {checkUserInput} = require('../../validations');
const bcrypt = require('bcryptjs');


router.post('/', async (req, res, next) => {
    try{
await User.deleteOne({_id: req.body.id});
await res.status(200).send("alles gut")
    }
    catch (e) {
        await res.status(401).send("alles Falsch")
    }

});

module.exports = router;