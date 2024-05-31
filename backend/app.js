const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoutes");
const listingRouter = require("./routes/listingRoutes");
const bookingRouter = require("./routes/bookingRoutes");
const serviceRouter = require("./routes/serviceRoutes");
const cors = require("cors");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controller/errorController");
const app = express();

app.use(bodyParser.json());

app.use(cors({
  origin: "https://investors-club-mern.vercel.app/" // Replace with your actual origin
}));
// Example static file serving in Express
app.use("/uploads", express.static("public/uploads"));

app.use("/", userRouter);
app.use("/", listingRouter);
app.use("/", serviceRouter);
// app.use("/",bookingRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
