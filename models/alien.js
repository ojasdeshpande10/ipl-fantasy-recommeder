const mongoose = require('mongoose')



const { Schema } = mongoose
const alienSchema = new Schema({


    name: {
        type: String,


    },
    team: {
        type: String,

    },
    role: {
        type: String,


    }




})


module.exports = mongoose.model('Alien', alienSchema)