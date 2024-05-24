const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Enter your Business Name"],
    },
    description: {
      type: String,
      required: [true, "Please provide description of your Service"],
    },
    askingPrice: {
      type: Number,
      required: [true, "Please provide Price of your service"],
    },
    rating: {
      type: Number,
    },
    portforlioUrl: {
      type: String,
      required: [true, "Please provide Business Type"],
    },
    image: {
      type: String,
      // required: [true, "Please provide Image"],

    },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
