const { User, Bus, Booking } = require("../models");

exports.createBooking = async (req, res) => {
    try {
        const { userId, busId, seatNumber } = req.body;

        const booking = await Booking.create({
            UserId: userId,
            BusId: busId,
            seatNumber
        });

        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBookingsByUser = async (req, res) => {
    try {
        const bookings = await Booking.findAll({
            where: { UserId: req.params.id },
            include: Bus
        });

        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBookingsByBus = async (req, res) => {
    try {
        const bookings = await Booking.findAll({
            where: { BusId: req.params.id },
            include: User
        });

        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
