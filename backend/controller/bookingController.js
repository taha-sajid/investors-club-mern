const stripe = require('stripe')('sk_test_51IUUjEJH859ANoDfwGuyzeFu7LB3u7ct8HdDjKY4lXCgROHquL9YTVBkC8X131Ho1eYthTACmaVFv11BvUj3t3t300xM60rMhC')
const Listing = require("../models/listingModel")
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Booking = require('../models/bookingModel')
const factory = require('./handlerFactory');

// secret keysjssjs
console.log("process.env.STRIPE_SECRET_KEY", process.env.STRIPE_SECRET_KEY)
// sk_test_51IUUjEJH859ANoDfwGuyzeFu7LB3u7ct8HdDjKY4lXCgROHquL9YTVBkC8X131Ho1eYthTACmaVFv11BvUj3t3t300xM60rMhC
// 
// exports.getCheckoutSession = catchAsync(async (req, res, next)=>{
//     // get the currently booked listing 
//     const listing = await Listing.findById(req.params.id);

//     // create checkout session 

//     const session = await stripe.checkout.sessions.create({
//         payment_method_types : ['card'],
//         success_url : `${req.protocol}://${req.get('host')}/`,
//         cancel_url : `${req.protocol}://${req.get('host')}/`,
//         client_reference_id : req.params.id,
//         line_items : [{
//             name: `${listing.name}`,
//             images: [`https://i.tribune.com.pk/media/images/1921576-download-1551513575/1921576-download-1551513575.jpg`]
//         }
//         ],
//         currency:'pkr',
//         quantity : 1
//     })

//     res.status(200).json({
//         status:'success',
//         session
//     })
// });


exports.getCheckoutSession = catchAsync(async (req, res, next) => {
    // get the currently booked listing 
    const listing = await Listing.findById(req.params.id);
    console.log(listing);

    // create checkout session 
    const lineItems = [{
        price_data: {
            currency: "pkr",
            product_data: {
                name: listing.name,
                images: ["https://i.tribune.com.pk/media/images/1921576-download-1551513575/1921576-download-1551513575.jpg"]
            },
            unit_amount: listing.askingPrice,
        },
        quantity: 1
    }];

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${req.protocol}://${req.get('host')}/?listing=${req.params.id}&user=${req.user.id}&price=${listing.askingPrice}`,
        cancel_url: `${req.protocol}://${req.get('host')}/`
    });

    res.status(200).json({
        status: 'success',
        session,
    });
});

  

exports.createBookingCheckout =catchAsync( async (req , res , next ) => {
    const {listing  , user , price} = req.query;

    if(!listing && !user && !price ) return next();

    await Booking.create({listing , user , price })

    res.redirect(req.originalUrl.split('?')[0]);
});


exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBooking = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);