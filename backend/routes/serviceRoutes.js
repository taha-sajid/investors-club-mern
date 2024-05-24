const express = require("express");
const serviceController = require("../controller/serviceController");
const router = express.Router();


  

router.get("/getallservice", serviceController.getAllServices);
router.get("/getservice/:id", serviceController.getServiceById);
router.post("/createservice", serviceController.uploadListingPhoto , serviceController.createService);
router.patch("/updateservice/:id", serviceController.updateServiceById); // New update route
module.exports = router;