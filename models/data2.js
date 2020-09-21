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
    match1:{
        type:Number,
    },
    match2:{
        type:Number,
    },
    
    marquee: {
        type:Boolean,
    },
    average:{
        type:Number,
    }




})


module.exports = mongoose.model('Alien', alienSchema)