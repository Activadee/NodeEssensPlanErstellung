const mongoose = require('mongoose');
mongoose.pluralize(null);
const userPlanModel = new mongoose.Schema({
    userID: {
        type: String,
    },
    KW: {
        type: String,
        required: false,
        min: 1,
        max: 60
    },
    Montag: {
        type: Object,
        required: false,
        min: 5,
        max: 20
    },
    Dienstag: {
        type: Object,
        required: false,
        min: 5,
        max: 50
    },
    Mittwoch: {
        type: Object,
        required: false,
        min: 5,
        max: 50
    },
    Donnerstag: {
        type: Object,
        required: false,
        min: 5,
        max: 50
    },
    Freitag: {
        type: Object,
        required: false,
        min: 5,
        max: 50
    }

});
module.exports = mongoose.model('userplans', userPlanModel);