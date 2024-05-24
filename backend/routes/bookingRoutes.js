const express = require("express");
const bookingController = require('../controller/bookingController');
const authController = require('../controller/authController')
const router = express.Router();


// yahan rest principle follow nahi krengay bcz its not for creating deleting or updating 
// this route is only for client to get check out sessions 
router.use(authController.protect)

router.get('/checkout-session/:id', bookingController.getCheckoutSession)

router.use(authController.restrictTo('admin'));

router.route('/').get(bookingController.getAllBooking).post(bookingController.createBooking)

router.route('/:id').get(bookingController.getBooking).patch(bookingController.updateBooking,bookingController.deleteBooking)


module.exports = router;