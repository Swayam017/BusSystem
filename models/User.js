const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db_connections");

const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING
}, { timestamps: false });

module.exports = User;
