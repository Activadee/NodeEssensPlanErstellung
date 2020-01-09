const mongoose = require('mongoose');
mongoose.pluralize(null);
const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 5,
        max: 20
    },
    nfcid: {
        type: String,
        required: false,
        min: 9,
        max: 100
    },
    nachname: {
        type: String,
        required:true,
        min: 2,
        max: 50
    },
    vorname: {
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 50
    },
    passwort : {
        type: String,
        required: true,
        min: 10,
        max: 1024 // weil gehasht
    },
});
module.exports = mongoose.model('user', userModel);