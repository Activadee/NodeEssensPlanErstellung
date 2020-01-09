var express = require('express');
var router = express.Router();
const userPlan = require('../../model/UserPlan');
const Plan = require('../../model/Plan');

require('dotenv').config();
const jwt = require('jsonwebtoken');
require('dotenv').config();


router.post('/', async (req, res, next) => {

    // const user = await jwt.verify(req.header('token'), process.env.TOKEN_ADMIN);
    const currPlan = await Plan.findOne({KW: req.body.kw.toString()});
    const userPlans = await userPlan.find({KW: req.body.kw.toString()});
    const ret = {
        montag: {
            ger1: {
                anzahl: 0,
                name: currPlan.Montag.ger1.name
            },
            ger2: {
                anzahl: 0,
                name: currPlan.Montag.ger2.name
            },
            veg1: {
                anzahl: 0,
                name: currPlan.Montag.veg1.name
            },
            veg2: {
                anzahl: 0,
                name: currPlan.Montag.veg2.name
            },
            des1: {
                anzahl: 0,
                name: currPlan.Montag.des1.name
            },
            des2: {
                anzahl: 0,
                name: currPlan.Montag.des2.name
            },
        },
        dienstag: {
            ger1: {
                anzahl: 0,
                name: currPlan.Dienstag.ger1.name
            },
            ger2: {
                anzahl: 0,
                name: currPlan.Dienstag.ger2.name
            },
            veg1: {
                anzahl: 0,
                name: currPlan.Dienstag.veg1.name
            },
            veg2: {
                anzahl: 0,
                name: currPlan.Dienstag.veg2.name
            },
            des1: {
                anzahl: 0,
                name: currPlan.Dienstag.des1.name
            },
            des2: {
                anzahl: 0,
                name: currPlan.Dienstag.des2.name
            },
        },
        mittwoch: {
            ger1: {
                anzahl: 0,
                name: currPlan.Mittwoch.ger1.name
            },
            ger2: {
                anzahl: 0,
                name: currPlan.Mittwoch.ger2.name
            },
            veg1: {
                anzahl: 0,
                name: currPlan.Mittwoch.veg1.name
            },
            veg2: {
                anzahl: 0,
                name: currPlan.Mittwoch.veg2.name
            },
            des1: {
                anzahl: 0,
                name: currPlan.Mittwoch.des1.name
            },
            des2: {
                anzahl: 0,
                name: currPlan.Mittwoch.des2.name
            },
        },
        donnerstag: {
            ger1: {
                anzahl: 0,
                name: currPlan.Donnerstag.ger1.name
            },
            ger2: {
                anzahl: 0,
                name: currPlan.Donnerstag.ger2.name
            },
            veg1: {
                anzahl: 0,
                name: currPlan.Donnerstag.veg1.name
            },
            veg2: {
                anzahl: 0,
                name: currPlan.Donnerstag.veg2.name
            },
            des1: {
                anzahl: 0,
                name: currPlan.Donnerstag.des1.name
            },
            des2: {
                anzahl: 0,
                name: currPlan.Donnerstag.des2.name
            },
        },
        freitag: {
            ger1: {
                anzahl: 0,
                name: currPlan.Freitag.ger1.name
            },
            ger2: {
                anzahl: 0,
                name: currPlan.Freitag.ger2.name
            },
            veg1: {
                anzahl: 0,
                name: currPlan.Freitag.veg1.name
            },
            veg2: {
                anzahl: 0,
                name: currPlan.Freitag.veg2.name
            },
            des1: {
                anzahl: 0,
                name: currPlan.Freitag.des1.name
            },
            des2: {
                anzahl: 0,
                name: currPlan.Freitag.des2.name
            },
        },


    };
    for (const userplan of userPlans) {
        if (userplan.Montag.ger.name === currPlan.Montag.ger1.name) {
            ret.montag.ger1.anzahl += 1;

        }
        if (userplan.Montag.ger.name === currPlan.Montag.ger2.name) {
            ret.montag.ger2.anzahl += 1;

        }
        if (userplan.Montag.ger.name === currPlan.Montag.veg1.name) {
            ret.montag.veg1.anzahl += 1;

        }
        if (userplan.Montag.ger.name === currPlan.Montag.veg2.name) {
            ret.montag.veg2.anzahl += 1;

        }
        if (userplan.Montag.des.name === currPlan.Montag.des1.name) {
            ret.montag.des1.anzahl += 1;

        }
        if (userplan.Montag.des.name === currPlan.Montag.des2.name) {
            ret.montag.des2.anzahl += 1;

        }
        if (userplan.Dienstag.ger.name === currPlan.Dienstag.ger1.name) {
            ret.dienstag.ger1.anzahl += 1;

        }
        if (userplan.Dienstag.ger.name === currPlan.Dienstag.ger2.name) {
            ret.dienstag.ger2.anzahl += 1;

        }
        if (userplan.Dienstag.ger.name === currPlan.Dienstag.veg1.name) {
            ret.dienstag.veg1.anzahl += 1;

        }
        if (userplan.Dienstag.ger.name === currPlan.Dienstag.veg2.name) {
            ret.dienstag.veg2.anzahl += 1;

        }
        if (userplan.Dienstag.des.name === currPlan.Dienstag.des1.name) {
            ret.dienstag.des1.anzahl += 1;

        }
        if (userplan.Dienstag.des.name === currPlan.Dienstag.des2.name) {
            ret.dienstag.des2.anzahl += 1;

        }
        if (userplan.Mittwoch.ger.name === currPlan.Mittwoch.ger1.name) {
            ret.mittwoch.ger1.anzahl += 1;

        }
        if (userplan.Mittwoch.ger.name === currPlan.Mittwoch.ger2.name) {
            ret.mittwoch.ger2.anzahl += 1;

        }
        if (userplan.Mittwoch.ger.name === currPlan.Mittwoch.veg1.name) {
            ret.mittwoch.veg1.anzahl += 1;

        }
        if (userplan.Mittwoch.ger.name === currPlan.Mittwoch.veg2.name) {
            ret.mittwoch.veg2.anzahl += 1;

        }
        if (userplan.Mittwoch.des.name === currPlan.Mittwoch.des1.name) {
            ret.mittwoch.des1.anzahl += 1;

        }
        if (userplan.Mittwoch.des.name === currPlan.Mittwoch.des2.name) {
            ret.mittwoch.des2.anzahl += 1;

        }
        if (userplan.Donnerstag.ger.name === currPlan.Donnerstag.ger1.name) {
            ret.donnerstag.ger1.anzahl += 1;

        }
        if (userplan.Donnerstag.ger.name === currPlan.Donnerstag.ger2.name) {
            ret.donnerstag.ger2.anzahl += 1;

        }
        if (userplan.Donnerstag.ger.name === currPlan.Donnerstag.veg1.name) {
            ret.donnerstag.veg1.anzahl += 1;

        }
        if (userplan.Donnerstag.ger.name === currPlan.Donnerstag.veg2.name) {
            ret.donnerstag.veg2.anzahl += 1;

        }
        if (userplan.Donnerstag.des.name === currPlan.Donnerstag.des1.name) {
            ret.donnerstag.des1.anzahl += 1;

        }
        if (userplan.Donnerstag.des.name === currPlan.Donnerstag.des2.name) {
            ret.donnerstag.des2.anzahl += 1;

        }
        if (userplan.Freitag.ger.name === currPlan.Freitag.ger1.name) {
            ret.freitag.ger1.anzahl += 1;

        }
        if (userplan.Freitag.ger.name === currPlan.Freitag.ger2.name) {
            ret.freitag.ger2.anzahl += 1;

        }
        if (userplan.Freitag.ger.name === currPlan.Freitag.veg1.name) {
            ret.freitag.veg1.anzahl += 1;

        }
        if (userplan.Freitag.ger.name === currPlan.Freitag.veg2.name) {
            ret.freitag.veg2.anzahl += 1;

        }
        if (userplan.Freitag.des.name === currPlan.Freitag.des1.name) {
            ret.freitag.des1.anzahl += 1;

        }
        if (userplan.Freitag.des.name === currPlan.Freitag.des2.name) {
            ret.freitag.des2.anzahl += 1;
        }


    }
    res.status(200).send(ret)


});


module.exports = router;