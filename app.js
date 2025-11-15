const express = require("express");
const app = express();

const db = require("./utils/db_connections");

db.sync({ force: true }).then(() => {
    console.log("Database synced");
});

// Load associations
require("./models");

app.use(express.json());

// Routes
app.use("/users", require("./routes/userRoutes"));
app.use("/buses", require("./routes/busRoutes"));
app.use("/bookings", require("./routes/bookingRoutes"));

app.listen(3000, () => console.log("Server running on port 3000"));
