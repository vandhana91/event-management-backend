const mongoose = require("mongoose");
const bookingschema = mongoose.Schema({
    name: {
        type:String ,required:true
    },
    date:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required : true
    },
    status:{
        type:String,
        default : 'enrolled'
    }
},
{
    timestamps : true
    }
    )

  const bookingModel = mongoose.model('bookings',bookingschema);
  module.exports = bookingModel
