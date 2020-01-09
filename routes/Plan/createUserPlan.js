var express = require('express');
var router = express.Router();
const User = require('../../model/User');
const UserPlan = require('../../model/UserPlan');
const Gericht = require('../../model/Gericht');
const Dessert = require('../../model/Dessert');
require('dotenv').config();
const nodemailer = require('nodemailer');
const createpdf = require('../PDFCreation/PdfCreate');


router.post('/', async (req, res, next) => {
    try {
        const exist = await UserPlan.findOne({KW: req.body.kw, userID: req.body.user});
        if (exist) await UserPlan.deleteOne({KW: req.body.kw, userID: req.body.user});
        const plan = new UserPlan({
            userID: req.body.user,
            KW: req.body.kw,
            Montag: {
                ger: req.body.montag.ger ? await Gericht.findOne({_id: req.body.montag.ger}) : "",
                des: req.body.montag.des ? await Dessert.findOne({_id: req.body.montag.des}) : "",
            },
            Dienstag: {
                ger: req.body.dienstag.ger ? await Gericht.findOne({_id: req.body.dienstag.ger}) : "",
                des: req.body.dienstag.des ? await Dessert.findOne({_id: req.body.dienstag.des}) : "",
            },
            Mittwoch: {
                ger: req.body.mittwoch.ger ? await Gericht.findOne({_id: req.body.mittwoch.ger}) : "",
                des: req.body.mittwoch.des ? await Dessert.findOne({_id: req.body.mittwoch.des}) : "",
            },
            Donnerstag: {
                ger: req.body.donnerstag.ger ? await Gericht.findOne({_id: req.body.donnerstag.ger}) : "",
                des: req.body.donnerstag.des ? await Dessert.findOne({_id: req.body.donnerstag.des}) : "",
            },
            Freitag: {
                ger: req.body.freitag.ger ? await Gericht.findOne({_id: req.body.freitag.ger}) : "",
                des: req.body.freitag.des ? await Dessert.findOne({_id: req.body.freitag.des}) : "",
            },

        });
        await plan.save();
        const user = await User.findOne({_id: req.body.user});


        const data = {
            Vorname: user.vorname,
            Nachname: user.nachname,
            KW: req.body.kw,
            MoName: plan.Montag.ger.name,
            MoKcal: plan.Montag.ger.kcal,
            MoSalz: plan.Montag.ger.salz,
            MoKohlenHydrate: plan.Montag.ger.kohlenhydrate,
            MoEiweiss: plan.Montag.ger.eiweiss,
            MoFett: plan.Montag.ger.fett,


            DiName: plan.Dienstag.ger.name,
            DiKcal: plan.Dienstag.ger.kcal,
            DiSalz: plan.Dienstag.ger.salz,
            DiKohlenHydrate: plan.Dienstag.ger.kohlenhydrate,
            DiEiweiss: plan.Dienstag.ger.eiweiss,
            DiFett: plan.Dienstag.ger.fett,


            MiName: plan.Mittwoch.ger.name,
            MiKcal: plan.Mittwoch.ger.kcal,
            MiSalz: plan.Mittwoch.ger.salz,
            MiKohlenHydrate: plan.Mittwoch.ger.kohlenhydrate,
            MiEiweiss: plan.Mittwoch.ger.eiweiss,
            MiFett: plan.Mittwoch.ger.fett,


            DoName: plan.Donnerstag.ger.name,
            DoKcal: plan.Donnerstag.ger.kcal,
            DoSalz: plan.Donnerstag.ger.salz,
            DoKohlenHydrate: plan.Donnerstag.ger.kohlenhydrate,
            DoEiweiss: plan.Donnerstag.ger.eiweiss,
            DoFett: plan.Donnerstag.ger.fett,

            FrName: plan.Freitag.ger.name,
            FrKcal: plan.Freitag.ger.kcal,
            FrSalz: plan.Freitag.ger.salz,
            FrKohlenHydrate: plan.Freitag.ger.kohlenhydrate,
            FrEiweiss: plan.Freitag.ger.eiweiss,
            FrFett: plan.Freitag.ger.fett,

            MoDesName: plan.Montag.des.name,
            MoDesKohlenHydrate: plan.Montag.des.kohlenhydrate,
            MoDesSalz: plan.Montag.des.salz,
            MoDesKcal: plan.Montag.des.kcal,
            MoDesEiweiss: plan.Montag.des.eiweiss,
            MoDesFett: plan.Montag.des.fett,

            DiDesName: plan.Dienstag.des.name,
            DiDesKohlenHydrate: plan.Dienstag.des.kohlenhydrate,
            DiDesSalz: plan.Dienstag.des.salz,
            DiDesKcal: plan.Dienstag.des.kcal,
            DiDesEiweiss: plan.Dienstag.des.eiweiss,
            DiDesFett: plan.Dienstag.des.fett,

            MiDesName: plan.Mittwoch.des.name,
            MiDesKohlenHydrate: plan.Mittwoch.des.kohlenhydrate,
            MiDesSalz: plan.Mittwoch.des.salz,
            MiDesKcal: plan.Mittwoch.des.kcal,
            MiDesEiweiss: plan.Mittwoch.des.eiweiss,
            MiDesFett: plan.Mittwoch.des.fett,

            DoDesName: plan.Donnerstag.des.name,
            DoDesKohlenHydrate: plan.Donnerstag.des.kohlenhydrate,
            DoDesSalz: plan.Donnerstag.des.salz,
            DoDesKcal: plan.Donnerstag.des.kcal,
            DoDesEiweiss: plan.Donnerstag.des.eiweiss,
            DoDesFett: plan.Donnerstag.des.fett,

            FrDesName: plan.Freitag.des.name,
            FrDesKohlenHydrate: plan.Freitag.des.kohlenhydrate,
            FrDesSalz: plan.Freitag.des.salz,
            FrDesKcal: plan.Freitag.des.kcal,
            FrDesEiweiss: plan.Freitag.des.eiweiss,
            FrDesFett: plan.Freitag.des.fett,


        };
        await createpdf.creadePDF(data);

        // Transporter
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USERNAME_GMAIL,
                pass: process.env.PASS_GMAIL
            }
        });

        let mailOptions = {
            from: process.env.USERNAME_GMAIL,
            to: user.email,
            subject: `Dein Essensplan für die KW ${req.body.kw}`,
            text: `Hallo ${user.vorname}! Im Anhang findest du deinen Essensplan für die Kalenderwoche ${req.body.kw}`,
            attachments: [
                {
                    filename: `Essensplan_KW${req.body.kw}_${user.nachname}.pdf`,
                    path: `${process.cwd()}/pdf/${req.body.kw}-${user.vorname}-${user.nachname}.pdf`
                }
            ]
        };
        await transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Email weg!")
            }
        });
        await res.status(200).json({id: user._id})
    } catch (e) {
        console.log(e)
    }
});


module.exports = router;