const mongoose = require('mongoose')
const { Double } = require('mongodb')



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


    },
    average: {
        type: Number,
    },
    marquee: {
        type:Boolean,
    }




})


module.exports = mongoose.model('Alien', alienSchema)