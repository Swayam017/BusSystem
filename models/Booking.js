const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db_connections");

const Booking = sequelize.define("Booking", {
    seatNumber: DataTypes.INTEGER
}, { timestamps: false });

module.exports = Booking;
