var express = require('express');
var router = express.Router();
const Plan = require('../../model/Plan');
const Meals = require('../../model/Gericht');
const Dessert = require('../../model/Dessert');

const bcrypt = require('bcryptjs');
const {checkPlanInput} = require("../../validations");


router.post('/', async (req, res, next) => {
    console.log(req.body);
    const {value, error} = checkPlanInput(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const exist = await Plan.findOne({KW: req.body.kw});
    if (exist) await Plan.deleteOne({KW: exist.KW});

    ger1Mo = await Meals.findOne({_id: req.body.montag.gericht1});
    ger2Mo = await Meals.findOne({_id: req.body.montag.gericht2});
    veg1Mo = await Meals.findOne({_id: req.body.montag.vegetarisch1});
    veg2Mo = await Meals.findOne({_id: req.body.montag.vegetarisch2});
    des1Mo = await Dessert.findOne({_id: req.body.montag.dessert1});
    des2Mo = await Dessert.findOne({_id: req.body.montag.dessert2});


    ger1Di = await Meals.findOne({_id: req.body.dienstag.gericht1});
    ger2Di = await Meals.findOne({_id: req.body.dienstag.gericht2});
    veg1Di = await Meals.findOne({_id: req.body.dienstag.vegetarisch1});
    veg2Di = await Meals.findOne({_id: req.body.dienstag.vegetarisch2});
    des1Di = await Dessert.findOne({_id: req.body.dienstag.dessert1});
    des2Di = await Dessert.findOne({_id: req.body.dienstag.dessert2});


    ger1Mi = await Meals.findOne({_id: req.body.mittwoch.gericht1});
    ger2Mi = await Meals.findOne({_id: req.body.mittwoch.gericht2});
    veg1Mi = await Meals.findOne({_id: req.body.mittwoch.vegetarisch1});
    veg2Mi = await Meals.findOne({_id: req.body.mittwoch.vegetarisch2});
    des1Mi = await Dessert.findOne({_id: req.body.mittwoch.dessert1});
    des2Mi = await Dessert.findOne({_id: req.body.mittwoch.dessert2});


    ger1Do = await Meals.findOne({_id: req.body.donnerstag.gericht1});
    ger2Do = await Meals.findOne({_id: req.body.donnerstag.gericht2});
    veg1Do = await Meals.findOne({_id: req.body.donnerstag.vegetarisch1});
    veg2Do = await Meals.findOne({_id: req.body.donnerstag.vegetarisch2});
    des1Do = await Dessert.findOne({_id: req.body.donnerstag.dessert1});
    des2Do = await Dessert.findOne({_id: req.body.donnerstag.dessert2});


    ger1Fr = await Meals.findOne({_id: req.body.freitag.gericht1});
    ger2Fr = await Meals.findOne({_id: req.body.freitag.gericht2});
    veg1Fr = await Meals.findOne({_id: req.body.freitag.vegetarisch1});
    veg2Fr = await Meals.findOne({_id: req.body.freitag.vegetarisch2});
    des1Fr = await Dessert.findOne({_id: req.body.freitag.dessert1});
    des2Fr = await Dessert.findOne({_id: req.body.freitag.dessert2});


    const plan = new Plan({
        KW: req.body.kw,
        Montag: {
            ger1: ger1Mo,
            ger2: ger2Mo,
            veg1: veg1Mo,
            veg2: veg2Mo,
            des1: des1Mo,
            des2: des2Mo
        }, Dienstag: {
            ger1: ger1Di,
            ger2: ger2Di,
            veg1: veg1Di,
            veg2: veg2Di,
            des1: des1Di,
            des2: des2Di
        }, Mittwoch: {
            ger1: ger1Mi,
            ger2: ger2Mi,
            veg1: veg1Mi,
            veg2: veg2Mi,
            des1: des1Mi,
            des2: des2Mi
        }, Donnerstag: {
            ger1: ger1Do,
            ger2: ger2Do,
            veg1: veg1Do,
            veg2: veg2Do,
            des1: des1Do,
            des2: des2Do
        }, Freitag: {
            ger1: ger1Fr,
            ger2: ger2Fr,
            veg1: veg1Fr,
            veg2: veg2Fr,
            des1: des1Fr,
            des2: des2Fr
        },
    });
    try {
        await plan.save();
        res.send({plan: plan._id})
    } catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
});

module.exports = router;