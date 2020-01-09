var express = require('express');
var router = express.Router();
const Gericht = require('../../model/Gericht');
const Plan = require('../../model/Plan');
const Dessert = require('../../model/Dessert');
require('dotenv').config();
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/', async (req, res, next) => {
    const plan = await Plan.findOne({_id: req.body._id});

    const montag = {
        ger1: req.body.montag.gericht1 === "" ? plan.Montag.ger1 : await Gericht.findOne({_id: req.body.montag.gericht1}),
        ger2: req.body.montag.gericht2 === "" ? plan.Montag.ger2 : await Gericht.findOne({_id: req.body.montag.gericht2}),
        veg1: req.body.montag.vegetarisch1 === "" ? plan.Montag.veg1 : await Gericht.findOne({_id: req.body.montag.vegetarisch1}),
        veg2: req.body.montag.vegetarisch2 === "" ? plan.Montag.veg2 : await Gericht.findOne({_id: req.body.montag.vegetarisch2}),
        des1: req.body.montag.dessert1 === "" ? plan.Montag.des1 : await Dessert.findOne({_id: req.body.montag.dessert1}),
        des2: req.body.montag.dessert2 === "" ? plan.Montag.des2 : await Dessert.findOne({_id: req.body.montag.dessert2}),
    };
    const dienstag = {
        ger1: req.body.dienstag.gericht1 === "" ? plan.Dienstag.ger1 : await Gericht.findOne({_id: req.body.dienstag.gericht1}),
        ger2: req.body.dienstag.gericht2 === "" ? plan.Dienstag.ger2 : await Gericht.findOne({_id: req.body.dienstag.gericht2}),
        veg1: req.body.dienstag.vegetarisch1 === "" ? plan.Dienstag.veg1 : await Gericht.findOne({_id: req.body.dienstag.vegetarisch1}),
        veg2: req.body.dienstag.vegetarisch2 === "" ? plan.Dienstag.veg2 : await Gericht.findOne({_id: req.body.dienstag.vegetarisch2}),
        des1: req.body.dienstag.dessert1 === "" ? plan.Dienstag.des1 : await Dessert.findOne({_id: req.body.dienstag.dessert1}),
        des2: req.body.dienstag.dessert2 === "" ? plan.Dienstag.des2 : await Dessert.findOne({_id: req.body.dienstag.dessert2}),
    };
    const mittwoch = {
        ger1: req.body.mittwoch.gericht1 === "" ? plan.Mittwoch.ger1 : await Gericht.findOne({_id: req.body.mittwoch.gericht1}),
        ger2: req.body.mittwoch.gericht2 === "" ? plan.Mittwoch.ger2 : await Gericht.findOne({_id: req.body.mittwoch.gericht2}),
        veg1: req.body.mittwoch.vegetarisch1 === "" ? plan.Mittwoch.veg1 : await Gericht.findOne({_id: req.body.mittwoch.vegetarisch1}),
        veg2: req.body.mittwoch.vegetarisch2 === "" ? plan.Mittwoch.veg2 : await Gericht.findOne({_id: req.body.mittwoch.vegetarisch2}),
        des1: req.body.mittwoch.dessert1 === "" ? plan.Mittwoch.des1 : await Dessert.findOne({_id: req.body.mittwoch.dessert1}),
        des2: req.body.mittwoch.dessert2 === "" ? plan.Mittwoch.des2 : await Dessert.findOne({_id: req.body.mittwoch.dessert2}),
    };
    const donnerstag = {
        ger1: req.body.donnerstag.gericht1 === "" ? plan.Donnerstag.ger1 : await Gericht.findOne({_id: req.body.donnerstag.gericht1}),
        ger2: req.body.donnerstag.gericht2 === "" ? plan.Donnerstag.ger2 : await Gericht.findOne({_id: req.body.donnerstag.gericht2}),
        veg1: req.body.donnerstag.vegetarisch1 === "" ? plan.Donnerstag.veg1 : await Gericht.findOne({_id: req.body.donnerstag.vegetarisch1}),
        veg2: req.body.donnerstag.vegetarisch2 === "" ? plan.Donnerstag.veg2 : await Gericht.findOne({_id: req.body.donnerstag.vegetarisch2}),
        des1: req.body.donnerstag.dessert1 === "" ? plan.Donnerstag.des1 : await Dessert.findOne({_id: req.body.donnerstag.dessert1}),
        des2: req.body.donnerstag.dessert2 === "" ? plan.Donnerstag.des2 : await Dessert.findOne({_id: req.body.donnerstag.dessert2}),
    };
    const freitag = {
        ger1: req.body.freitag.gericht1 === "" ? plan.Freitag.ger1 : await Gericht.findOne({_id: req.body.freitag.gericht1}),
        ger2: req.body.freitag.gericht2 === "" ? plan.Freitag.ger2 : await Gericht.findOne({_id: req.body.freitag.gericht2}),
        veg1: req.body.freitag.vegetarisch1 === "" ? plan.Freitag.veg1 : await Gericht.findOne({_id: req.body.freitag.vegetarisch1}),
        veg2: req.body.freitag.vegetarisch2 === "" ? plan.Freitag.veg2 : await Gericht.findOne({_id: req.body.freitag.vegetarisch2}),
        des1: req.body.freitag.dessert1 === "" ? plan.Freitag.des1 : await Dessert.findOne({_id: req.body.freitag.dessert1}),
        des2: req.body.freitag.dessert2 === "" ? plan.Freitag.des2 : await Dessert.findOne({_id: req.body.freitag.dessert2}),
    };
    plan.KW = req.body.kw === "" ? plan.KW : req.body.kw;
    plan.Montag = montag;
    plan.Dienstag = dienstag;
    plan.Mittwoch = mittwoch;
    plan.Donnerstag = donnerstag;
    plan.Freitag = freitag;
    await plan.save(function (err, res) {
        if (err) {
            throw err;
        }

        // console.log('test me', res);
    });
    res.status(200).send("alles Ok!");

});


module.exports = router;