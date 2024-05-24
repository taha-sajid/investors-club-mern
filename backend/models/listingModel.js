const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  businessName: {
    type: String,
    // required: [true, "Enter your Business Name"],
  },
  url: {
    type: String,
    // required: [true, "Please provide your Business Url"],
    // unique: true,
    lowercase: true,
  },
  askingPrice: {
    type: String,
    // required: [true, "Please provide Price of your business"],
  },
  revenue1: {
    type: Number,
    // required: [true, "Please provide monthly revenue of your business"],
  },
  revenue2: {
    type: Number,
    // required: [true, "Please provide monthly revenue of your business"],
  },
  revenue3: {
    type: Number,
    // required: [true, "Please provide monthly revenue of your business"],
  },
  domainRegistrationYear: {
    type: String,
    // required: [true, "Please provide Domain Registration Year"],
  },
  listingPublished: {
    type: String,
    // required: [true, "Please provide Listing Published Date"],
  },
  listingUpdated: {
    type: String,
    // required: [true, "Please provide Listing Updated Date"],
  },
  businessType: {
    type: String,
    // required: [true, "Please provide Business Type"],
  },
  siteWorking: {
    type: String,
    // required: [true, "Please provide Business Type"],
  },
  monetizationMethods: {
    type: [String],
    // required: [true, "Please provide Monetization Methods"],
  },
  image: {
    type: String,
    // required: [true, "Please provide Image"],
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
