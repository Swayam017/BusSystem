const Bus = require("../models/Bus");
const { Op } = require("sequelize");


// POST /buses
exports.addBus = async (req, res) => {
    try {
        const bus = await Bus.create(req.body);
        res.status(201).send("Bus added successfully");
    } catch (error) {
        res.status(500).send("Error adding bus");
    }
};

// GET /buses/available/:seats
exports.getAvailableBuses = async (req, res) => {
    try {
        const minSeats = req.params.seats;

        const buses = await Bus.findAll({
            where: { availableSeats: { [Op.gt]: minSeats } }
        });

        res.json(buses);
    } catch (error) {
        res.status(500).send("Error fetching buses");
    }
};
