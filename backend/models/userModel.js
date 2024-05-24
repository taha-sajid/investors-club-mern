const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please tell us your name"],
  },
  email: {
    type: String,
    required: [true, "please provide your name"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  role: {
    type: String,
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    // This only works on CREATE and SAVE!!!
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "password are not the same",
    },
    select: false,
  },
  phoneNumber: {
    type: Number,
  },

  passwordChangedAt:Date,
});

userSchema.pre("save", async function (next) {
  // console.log(this.isModified('password'), "This target this keyword");
  
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

// change password function (user has change its password after the token was issued)
// ye bhi 1 instance method hoga
userSchema.methods.changedPasswordAfter = function(JWTTimestamp){
  // agr kabhi password change hua ho
  if(this.passwordChangedAt){
      // dono time stamp alag format mein hn passwordchangeAt ko second mein krnay k liye
      const changedTimestamp = parseInt(this.passwordChangedAt.getTime()/1000 , 10) // 10 yani base 10 number hai
      // console.log(this.passwordChangedAt , JWTTimestamp);
      // iske true honay ka mtlb password change hua hai
      return JWTTimestamp < changedTimestamp;
  }
  // by default ye value false hogi yani not change
  return false;
}

const User = mongoose.model("User", userSchema);


module.exports = User;
