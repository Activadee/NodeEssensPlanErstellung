const mongoose = require('mongoose');
mongoose.pluralize(null);
const dessertModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    kcal: {
        type: Number,
        required:true,
        min: 1,
        max: 2000
    },
    eiweiss: {
        type: Number,
        required: true,
        min: 1,
        max: 1000
    },
    salz: {
        type: Number,
        required: true,
        min: 1,
        max: 1000
    },
    fett : {
        type: Number,
        required: true,
        min: 1,
        max: 1000
    },
    kohlenhydrate : {
        type: Number,
        required: true,
        min: 1,
        max: 1000
    }

});
module.exports = mongoose.model('dessert', dessertModel);