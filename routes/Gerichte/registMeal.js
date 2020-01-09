var express = require('express');
var router = express.Router();
const Gericht = require('../../model/Gericht');
const {checkMealInput} = require('../../validations');


router.post('/', async (req, res, next) => {

    // Alle Daten richtig eingegeben?
    const {value, error} = checkMealInput(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const gericht = new Gericht({
        name: req.body.name,
        kcal: req.body.kcal,
        kohlenhydrate: req.body.kohlenhydrate,
        fett: req.body.fett,
        eiweiss: req.body.eiweiss,
        salz: req.body.salz
    });
    try {
        await gericht.save();
        res.send({id: gericht._id})
    } catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
});

module.exports = router;