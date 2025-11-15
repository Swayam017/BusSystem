const router = require("express").Router();
const controller = require("../controllers/bookingController");

// Create new booking
router.post("/", controller.createBooking);

// Get user → bookings
router.get("/user/:id/", controller.getBookingsByUser);

// Get bus → bookings
router.get("/bus/:id/", controller.getBookingsByBus);

module.exports = router;
