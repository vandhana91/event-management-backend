const express = require("express");
const router = express.Router();
const app = express();
var cors = require('cors');

const Event = require('../models/events')
app.use(cors({
    origin : '*',
    credentials : true
}));

router.get('/getallevents',async(req,res)=>
{
    try{
        const events = await Event.find({})
        res.send(events);
    }
    catch(error){
        return res.status(400).json({message:error});
    }
});

router.post('/geteventbyid',async(req,res)=>
{
    const eventid=req.body.eventid
    try{
        const event = await Event.findOne({_id : eventid})
        res.send(event);
    }
    catch(error){
        return res.status(400).json({message:error});
    }
});

module.exports = router;