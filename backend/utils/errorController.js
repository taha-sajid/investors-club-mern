
const handleCastErrorDB =(err)=>{
    const message = `invalid ${err.path}:${err.value}`
    return new AppError(message,400);
  }
  
  const handleDublicateFieldsDB = err =>{
    // value property mein se jo dublicate value dali hai usko extract krletay hn
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  
    const message = `dublicate field value. ${value} please try another value`;
    return new AppError(message,400);
  }
  
  
  const handleValidationErrorDB = err =>{
    // tamam errors k k messagges ko loop kia hao
    const errors = Object.values(err.errors).map(el=>el.message)
  
    const message = `invalid input data. ${errors.join('. ')}`;
    return new AppError(message,400);
  }
  
  // handle jwt error 
  const handleJwtExpiredError  = () => new AppError("Your token has expired",401)
  const handleJwtError = () => new AppError("invalid Token please try again later",401)
  
  const sendErrorDev =(err,res)=>{
    res.status(err.statusCode).json({
      status:err.status,
      message:err.message,
      error:err,
      stack:err.stack
    })
  }
  
  
  const sendErrorProd =(err,res)=>{
    // agr operational error hoga tou ye
    // operational error trusted error send message to the client 
    if(err.isOperational){
      res.status(err.statusCode).json({
        status:err.status,
        message:err.message,
      })
      // programming or other unknown error dont leak details to the client
    }else{
      // also log the error 
      console.error('error',err)
      // send generic message to the client
      res.status(500).json({
        status:'error',
        message:'something went very wrong',
      })
    }
   
  }
  
  
  module.exports= (err, req, res, next)=>{
      // to know status code 
      // agr status code aya tou theek warna 500 bhej dega
      err.statusCode = err.statusCode || 500;
      // to know status 
      err.status = err.status || 'error';
    
      
  
      if(process.env.NODE_ENV === 'development'){
        sendErrorDev(err,res)
      }else if(process.env.NODE_ENV === 'production'){
        // yahan mongo db k error handle kro
        // uper err use hua va hai tou usko overwrite nahi krengay balke 1 dusra variable bnayegay aur usmein pura 
        // err object copy krengay
  
        let error = {...err};
        // handleCastErrorDB ye mongo db k error ko handle krega
        // cast error wo name hai k jb humain mongo db se validator error miltay hn
        if(error.name === 'CastError') error = handleCastErrorDB(error)
        if(error.name === 'ValidatorError') error = handleValidationErrorDB(error)
  
  
        // dublicate fields error yahan handle kro 
        // is error ko identify code se krngay
        if(error.code === 11000) error = handleDublicateFieldsDB(error)
  
        // handle json web token error 
        if(error.name === 'JsonWebTokenError') error = handleJwtError()
        // token expires error 
        if(error.name === 'TokenExpiredError') error = handleJwtExpiredError()
        sendErrorProd(error,res)
      }
  
        
      
    }