const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db_connections");

const Bus = sequelize.define("Bus", {
    busNumber: DataTypes.STRING,
    totalSeats: DataTypes.INTEGER,
    availableSeats: DataTypes.INTEGER
}, { timestamps: false });

module.exports = Bus;
