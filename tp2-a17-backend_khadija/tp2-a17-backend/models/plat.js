const mongoose = require('mongoose')

const platSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    categorie: {
        type: String,
        required: true
    },
    calorie: {
        type: Number,
        required: true
    },
    recettes: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
        }

})

module.exports = mongoose.model('plat', platSchema)
