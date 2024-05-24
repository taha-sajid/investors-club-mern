const express = require("express");
const authController = require("../controller/authController");

const router = express.Router();

router.post("/register", authController.signUp);
router.post("/login", authController.login);
router.get("/getallusers", authController.getAllUser);
router.get("/getuser/:id", authController.getUser);

module.exports = router;
