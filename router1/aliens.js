const express = require('express')
const router = express.Router()
const Alien =require('../models/data2')
const { request } = require('express')


router.get('/',async(req,res) => {
   
    try{
       const aliens= await Alien.find()
       res.json(aliens)
   }
   catch(err){
       res.send('error' +err) 
   }
    
})
router.get('/players',async(req,res) => {
   
    
    try{
        const team=req.body.team
       const aliens= await Alien.find({team})
       res.send(aliens)
   }
   catch(err){
       res.send('error' +err) 
   }
    
})
router.post('/players1',async(req,res) => {
   
    
    try{
        const team=req.body.team
       const aliens= await Alien.find({$and: [ {team}, { average :{ $gt:50 } } ]}).sort({average: -1}).limit(7)
       res.send(aliens)
   }
   catch(err){
       res.send('error' +err) 
   }
    
})
router.post('/players2',async(req,res) => {
   
    
    try{
        const team=req.body.team
       const aliens= await Alien.find({$and: [ {team}, { match1 :{ $lt:50 } },{match2: {$lt:50}}, {marquee:true} ]})
       res.send(aliens)
   }
   catch(err){
       res.send('error' +err) 
   }
    
})
router.post('/',  async(req,res) => {
    const alien =new Alien({
        name: req.body.name,
        team: req.body.team,
        role: req.body.role,
        average: req.body.average,
        marquee: req.body.marquee
    })

    try{
        const a1 = await alien.save()
        console.log(a1)
        res.send(a1)
        

    }
    catch(err){
        console.log(err)
        
        
    }

})

module.exports =router