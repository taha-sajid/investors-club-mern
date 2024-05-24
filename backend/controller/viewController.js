const Listing = require('./../model/listingModel');
const User = require('./../model/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError')
const Booking = require('model/bookingModel')
const factory = require('./handlerFactory');


exports.getOverview = catchAsync( async (req,res, next)=>{
    // get our data from the collection 
    const Listings = await Listing.find();
    res.status(200).render('overview',{
      title:'All the Listings',
      Listings
      
    });
  });

  exports.getListing = catchAsync(async(req,res)=>{
    // get data from the requested Listing (including reviews and guides)
    const Listing = await Listing.findOne({slug:req.params.slug}).populate({
      path:'reviews',
      fields:'review rating user'
    })
    // if no Listing is found 
    if(!Listing){
      next(new AppError('there is no Listing with that name',404))
    }
    res.status(200).render('Listing',{
      Listing:`${Listing.name} Listing`,
      Listing
     
    });
  })

  exports.getLoginForm = ( req,res)=>{
    res.status(200).render('login',{
      title:'log into your account'
    })
  }


  // get account details

  exports.getAccount = ( req,res)=>{
    res.status(200).render('Account',{
      title:' your account'
    })
  }

  exports.getMyListings= catchAsync(async (req,res,next)=>{
    // 1) find all bookings 
    const bookings = await Booking.find({user:req.user.id});

    // 2) find tours with the returned ids 
    const listingIDs = bookings.map(el => el.listing);
    const listings = await Listing.find({_id:{$in:listingIDs}})

    res.status(200).json({
      message: "Success",
      listings
    })
})

  exports.updateUserData = catchAsync(async(req,res,next)=>{
    const updatedUser = await User.findByIdAndUpdate(req.user.id,{
      name:req.body.name,
      email:req.body.email
    },{
      new:true,
      runValidators:true
    });

    // yahan page ko updated info do
    res.status(200).render('Account',{
      title:' your account',
      user:updatedUser
    })
  });

  exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBooking = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);