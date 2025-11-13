const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db_connections");

const Payment = sequelize.define("Payment", {
    amountPaid: DataTypes.DECIMAL(10, 2),
    paymentStatus: DataTypes.STRING
}, { timestamps: false });

module.exports = Payment;
