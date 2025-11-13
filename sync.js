const sequelize = require("./utils/db_connections");
const User = require("./models/User");
const Bus = require("./models/Bus");
const Booking = require("./models/Booking");
const Payment = require("./models/Payment");

(async () => {
    await sequelize.sync({ alter: true });
    console.log("All tables created successfully");
})();
