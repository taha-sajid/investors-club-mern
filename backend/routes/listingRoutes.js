const express = require("express");
const listingController = require("../controller/ListingController");
const authController = require("../controller/authController");
const router = express.Router();

router.get("/getallistings", listingController.getAllListing);
router.get("/getlisting/:id", listingController.getListingById);
router.post(
  "/createlisting",
  listingController.uploadListingPhoto,
  listingController.createList
);
router.patch("/updatelisting/:id", listingController.updateListingById); // New update route
module.exports = router;
