const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    listing:{
        type : mongoose.Schema.ObjectId,
        ref: 'Listing',
        required : [true , 'Booking must have a listing']
    } ,
    user:{
        type:mongoose.Schema.ObjectId,
        ref: 'User',
        require:[true , 'Booking Must belong to a User']
    },
    price:{
        type:Number,
        require: [ true, 'Booking must have a price']
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    paid:{
        type : Boolean,
        default:true
    }
});

bookingSchema.pre(/^find/,function(next){
    this.populate('user').populate({
        path:'listing',
        select:'name'
    })
    next();
})

const Booking = mongoose.model('Booking' , bookingSchema)

module.exports = Booking;