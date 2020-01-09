const Joi = require('@hapi/joi');


// Admin Registrierung überprüfung
const checkAdminInput = data => {
    const schema = Joi.object({
        username: Joi.string().min(5).required(),
        nachname: Joi.string().min(2).max(50).required(),
        vorname: Joi.string().min(2).max(50).required(),
        email: Joi.string().email().min(6).max(50),
        passwort: Joi.string().min(10).max(1024).required()
    });
    return schema.validate(data)

};
const changeAdminInput = data => {
    const schema = Joi.object({
        id: Joi.string().required(),
        nachname: Joi.string().min(2).max(50).required(),
        vorname: Joi.string().min(2).max(50).required(),
        email: Joi.string().email().min(6).max(50),
    });
    return schema.validate(data)

};
// Koch Registrierung überprüfung
const checkKochInput = data => {
    const schema = Joi.object({
        username: Joi.string().min(5).required(),
        nachname: Joi.string().min(2).max(50).required(),
        vorname: Joi.string().min(2).max(50).required(),
        email: Joi.string().email().min(6).max(50),
        passwort: Joi.string().min(10).max(1024).required()
    });
    return schema.validate(data)

};
const changeKochInput = data => {
    const schema = Joi.object({
        id: Joi.string().required(),
        nachname: Joi.string().min(2).max(50).required(),
        vorname: Joi.string().min(2).max(50).required(),
        email: Joi.string().email().min(6).max(50),
    });
    return schema.validate(data)

};
// User Registrierung überprüfung
const checkUserInput = data => {
    const schema = Joi.object({
        username: Joi.string().min(5).required(),
        nfcid: Joi.string().min(9).max(100),
        nachname: Joi.string().min(2).max(50).required(),
        vorname: Joi.string().min(2).max(50).required(),
        email: Joi.string().email().min(6).max(50),
        passwort: Joi.string().min(10).max(1024).required()

    });
    return schema.validate(data)

};// User Registrierung überprüfung
const changeUserInput = data => {
    const schema = Joi.object({
        id: Joi.string().required(),
        nachname: Joi.string().min(2).max(50).required(),
        vorname: Joi.string().min(2).max(50).required(),
        email: Joi.string().email().min(6).max(50),

    });
    return schema.validate(data)

};
// Login Felder überprüfen
const checkLoginInput = data => {
    const schema = Joi.object({
        username: Joi.string().min(5).max(50).required(),
        passwort: Joi.string().min(10).max(1024).required()
    });
    return schema.validate(data)
};

// Desert Erstellung prüfen
const checkDessertInput = data => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        kcal: Joi.number().min(1).required(),
        kohlenhydrate: Joi.number().min(1).required(),
        fett: Joi.number().min(1).required(),
        eiweiss: Joi.number().min(1).required(),
        salz: Joi.number().min(1).required(),
    });
    return schema.validate(data)
};
const changeDessertInput = data => {
    const schema = Joi.object({
        id: Joi.string().required(),
        name: Joi.string().min(3).required(),
        kcal: Joi.number().min(1).required(),
        kohlenhydrate: Joi.number().min(1).required(),
        fett: Joi.number().min(1).required(),
        eiweiss: Joi.number().min(1).required(),
        salz: Joi.number().min(1).required(),
    });
    return schema.validate(data)
};

// Gericht Erstellung prüfen
const checkMealInput = data => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        kcal: Joi.number().min(1).required(),
        kohlenhydrate: Joi.number().min(1).required(),
        fett: Joi.number().min(1).required(),
        eiweiss: Joi.number().min(1).required(),
        salz: Joi.number().min(1).required(),
    });
    return schema.validate(data)
};
const changeMealInput = data => {
    const schema = Joi.object({
        id: Joi.string().required(),
        name: Joi.string().min(3).required(),
        kcal: Joi.number().min(1).required(),
        kohlenhydrate: Joi.number().min(1).required(),
        fett: Joi.number().min(1).required(),
        eiweiss: Joi.number().min(1).required(),
        salz: Joi.number().min(1).required(),
    });
    return schema.validate(data)
};
const checkPlanInput = data => {
    const schema = Joi.object({
        kw: Joi.string().required(),
        montag: {
            gericht1: Joi.string().required(),
            gericht2: Joi.string().required(),
            vegetarisch1: Joi.string().required(),
            vegetarisch2: Joi.string().required(),
            dessert1: Joi.string().required(),
            dessert2: Joi.string().required(),
        },
        dienstag: {
            gericht1: Joi.string().required(),
            gericht2: Joi.string().required(),
            vegetarisch1: Joi.string().required(),
            vegetarisch2: Joi.string().required(),
            dessert1: Joi.string().required(),
            dessert2: Joi.string().required(),
        },
        mittwoch: {
            gericht1: Joi.string().required(),
            gericht2: Joi.string().required(),
            vegetarisch1: Joi.string().required(),
            vegetarisch2: Joi.string().required(),
            dessert1: Joi.string().required(),
            dessert2: Joi.string().required(),
        },
        donnerstag: {
            gericht1: Joi.string().required(),
            gericht2: Joi.string().required(),
            vegetarisch1: Joi.string().required(),
            vegetarisch2: Joi.string().required(),
            dessert1: Joi.string().required(),
            dessert2: Joi.string().required(),
        },
        freitag: {
            gericht1: Joi.string().required(),
            gericht2: Joi.string().required(),
            vegetarisch1: Joi.string().required(),
            vegetarisch2: Joi.string().required(),
            dessert1: Joi.string().required(),
            dessert2: Joi.string().required(),
        },
    });
    return schema.validate(data)
};

module.exports.checkKochInput = checkKochInput;
module.exports.checkAdminInput = checkAdminInput;
module.exports.checkUserInput = checkUserInput;
module.exports.checkLoginInput = checkLoginInput;
module.exports.changeAdminInput = changeAdminInput;
module.exports.checkDessertInput = checkDessertInput;
module.exports.changeDessertInput = changeDessertInput;
module.exports.checkMealInput = checkMealInput;
module.exports.changeMealInput = changeMealInput;
module.exports.changeKochInput = changeKochInput;
module.exports.changeUserInput = changeUserInput;
module.exports.checkPlanInput = checkPlanInput;