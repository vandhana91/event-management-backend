const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://vandhana91:justice786@cluster0.rngab.mongodb.net/event-management';

mongoose.connect(mongoURL,{useUnifiedTopology: true,useNewUrlParser: true});

var connection =mongoose.connection

connection.on('error',()=>{
    console.log('MongoDB connection failed')
})

connection.on('connected',()=>{
    console.log('MongoDB connection successful')
})

module.exports = mongoose