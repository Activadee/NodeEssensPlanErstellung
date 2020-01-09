var express = require('express');
var router = express.Router();
const Dessert = require('../../model/Dessert');
const {checkDessertInput} = require('../../validations');


router.post('/', async (req, res, next) => {

    // Alle Daten richtig eingegeben?
    const {value, error} = checkDessertInput(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const dessert = new Dessert({
        name: req.body.name,
        kcal: req.body.kcal,
        kohlenhydrate: req.body.kohlenhydrate,
        fett: req.body.fett,
        eiweiss: req.body.eiweiss,
        salz: req.body.salz
    });
    try {
        await dessert.save();
        res.send({id: dessert._id})
    } catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
});

module.exports = router;