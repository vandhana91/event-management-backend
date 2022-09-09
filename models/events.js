
const mongoose = require("mongoose");

const eventsSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    date:{
        type: String,
        required: true
    },
    maxcount: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    description: {
        type: String,
        required: true
      },
    imageurl : [],
    
  },{ collection: 'event-info'},
  {
    timestamps : true
    }
  );

  const eventModel = mongoose.model('event-info',eventsSchema);
  module.exports = eventModel