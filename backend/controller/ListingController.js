const Listing = require("../models/listingModel")
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const multer = require("multer")


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const originalName = file.originalname;
    const fileExtension = originalName.split('.').pop(); // Get the file extension
    const newFilename = file.fieldname + '-' + uniqueSuffix + '.' + fileExtension;
    cb(null, newFilename);
  },
});

const multerFilter = (req, file , cb)=>{
  if(file.mimetype.startsWith('image')){
    cb(null, true)
  } else {
    cb( new AppError('Not an image please upload an image',400),false)
  }
}

const upload = multer({ storage: storage  , fileFilter: multerFilter});

exports.uploadListingPhoto =  upload.single('image');

// catchAsync ki kami hai yahan for handling rejection error
exports.createList = catchAsync(async (req, res, next) => {
  const { filename } = req.file;

  console.log(req); 

  const newProduct = await Listing.create({
    ...req.body,
    image: filename,
  });

  res.status(200).json({
    status: "success",
    message: "New product has been Created",
  });
});

exports.getAllListing = async (req, res) => {
    const allListing = await Listing.find();
    res.status(200).json({
      status: "success",
      result: allListing.length,
      data: allListing,
    });
  };


  // Get a single listing by ID
exports.getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    
    if (!listing) {
      return res.status(404).json({
        status: "fail",
        message: "Listing not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: listing,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};


exports.updateListingById = async (req, res) => {
  try {
    const listingId = req.params.id;
    const updatedData = req.body; // Assuming you're sending other updated data in the request body

    // Handle image upload if provided
    if (req.file) {
      // Update the image field with the new file path
      updatedData.image = req.file.path;
    }

    const updatedListing = await Listing.findByIdAndUpdate(listingId, updatedData, { new: true });

    if (!updatedListing) {
      return res.status(404).json({ status: "error", message: "Listing not found" });
    }

    res.status(200).json({ status: "success", data: updatedListing });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

