const db = require("../utils/db_connections");

// POST /buses → Add new bus
const addBus = (req, res) => {
    const { busNumber, totalSeats, availableSeats } = req.body;

    const query = `INSERT INTO buses (busNumber, totalSeats, availableSeats) VALUES (?, ?, ?)`;
    db.execute(query, [busNumber, totalSeats, availableSeats], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error adding bus");
        }
        res.status(201).send(`✅ Bus '${busNumber}' added successfully`);
    });
};

// GET /buses/available/:seats → Retrieve all buses with available seats > given number
const getAvailableBuses = (req, res) => {
    const seats = parseInt(req.params.seats);
    const query = `SELECT * FROM buses WHERE availableSeats > ?`;

    db.execute(query, [seats], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error fetching buses");
        }
        res.status(200).json(results);
    });
};

module.exports = { addBus, getAvailableBuses };
