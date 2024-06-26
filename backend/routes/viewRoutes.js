const express = require('express');
const viewController = require('../controller/viewController')
const authController = require('../controllers/authController')

const router = express.Router();

  // check logged in user for every route 
 
  
  router.get('/',authController.isLoggedIn, viewController.getOverview)
  
  router.get('/listing/:slug',authController.isLoggedIn, viewController.getTour);

  router.get('/login' , authController.isLoggedIn, viewController.getLoginForm);
  router.get('/me' ,authController.protect, viewController.getAccount);
  // updqate user by form
  router.post('/submit-user-data' ,authController.protect, viewController.updateUserData);

  router.get('/my-listing' ,authController.protect, viewController.getMyListings);

module.exports = router;