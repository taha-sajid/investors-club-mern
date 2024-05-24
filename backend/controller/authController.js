const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const {promisify} = require('util')



const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

exports.protect = catchAsync( async (req, res, next)=>{
  // 1) getting token and check if its there

  let token;

  // jwt mein token header bhejnay ka standard tareeka hota hai 
  // header mein authorization ayega aur uski value mein start mein Bearer 
  // ab usko check krnay k liye 
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
      // Bearer hsjahjashj bearer k bad wali value ko get krnay k liye 
      token = req.headers.authorization.split(' ')[1];
  }

  // agr token na mile tou
  if(!token){
      return next(new AppError('You are not logged in please log in to access',401))
  }
  // 2) verification of the token 

  // jwt khud hi verify krleta hai jwt.verify k zariye
  // ye 1 promise return krta hai is liye promisify promisify isko as aync await use kr saktay hn
  // agr promisfy nahi krtay tou call back lagana parta 
  // uper se promsify ko import bhi kro
  const decode = await promisify(jwt.verify)(token , process.env.JWT_SECRET);
  // console.log(decode);


  // 3) check if user still exists 
  // yani kbhi token bnaya ho uske bad us user ko delete hojaye tou token bhi khatm hojana chaiye
  const currentUser = await User.findById(decode.id);
  if (!currentUser){
      return next(new AppError('the user belonging to this token does not exist', 401));
  }


  // 4) check if user changed password after the token was issued 
  // jb bhi token bnta hai iat yani issued at assigned hojata hai
  // changedPasswordAfter ye instance method se aya hai
 if( currentUser.changedPasswordAfter(decode.iat)){
  return next(new AppError('user change passoword please log in again',401));
 }
  

  // lets put entire user data on request(for future)
  //req object travel from middleware to middleware (pass data between 2 middleware)
  req.user = currentUser;
  next();
});


const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.cookie("jwt", token, cookieOptions);

  // remove password from the output
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

// catchAsync ki kami hai yahan for handling rejection error
exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  if (!newUser) next(new AppError("Kindly enter data", 400));
  createSendToken(newUser, 201, res);
});

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    bcrypt.compare(password, user.password, (err, result) => {
      if (!user) {
        res.status(400).json({
          status: "Fail",
          message: "There is no user with this email",
        });
      }
      if (result) {
        user.password = undefined;

        res.status(200).json({
          status: "success",
          user,
        });
      } else {
        res.status(400).json({
          status: "Fail",
          message: "password is incorrect",
        });
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "There is no such email",
    });
  }
};



exports.getAllUser = async (req, res) => {
  const allUser = await User.find();
  res.status(200).json({
    status: "success",
    result: allUser.length,
    data: allUser,
  });
};

exports.getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(200).json({
      status: "fail",
      message: "There is no user with that ID",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: user,
    });
  }
};



// check krengay k user log in hai ya nahi
exports.isLoggedIn = async (req, res, next) => {

    
  // 1) getting token and check if its there

  let token;
  if(req.cookies.jwt){
      try{
      token = req.cookies.jwt
  

  // verify the token 
  const decode = await promisify(jwt.verify)(res.cookies.jwt, process.env.JWT_SECRET);
  // console.log(decode);


  // 3) check if user still exists 
  // yani kbhi token bnaya ho uske bad us user ko delete hojaye tou token bhi khatm hojana chaiye
  const currentUser = await User.findById(decode.id);
  if (!currentUser) {
      return next();
  }


  // 4) check if user changed password after the token was issued 
  // jb bhi token bnta hai iat yani issued at assigned hojata hai
  if (currentUser.changedPasswordAfter(decode.iat)) {
      return next();
  }


  // there is an logged in user
  // to send this user to pug templates 
  res.locals.user = currentUser;
 
  return next();
}catch(err){
  return next();
}
}
next();
};


exports.restrictTo = (...roles) => {
  // yahan ab middleware function bnayegay
  return (req, res, next) => {
      // uper req.user mein pura user object hai wahan se role nikal jayega
      if (!roles.includes(req.user.role)) {
          return next(new AppError('You dont have permission to access this route'), 403)
      }

      next();
  }
}