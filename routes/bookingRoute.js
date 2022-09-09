const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const Booking = require('../models/booking')

router.post('/bookevent',async(req,res)=>{
    
        const newbooking = new Booking({name: req.body.name,date:req.body.date, email: req.body.email})

        try{
            const booking = await newbooking.save()
            res.send("Event Enrolled Successfully")
        }
        catch(error){
            return res.status(400).json({error});
        }
    

});

module.exports = router
