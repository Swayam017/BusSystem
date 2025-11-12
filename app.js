const express = require('express');
const app = express();
const db = require("./utils/db_connections");
const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");

// Basic route
app.get("/", (req, res) => {
    res.send(" Welcome to Bus Booking System");
});
app.use(express.json());

app.use("/users",userRoutes);
app.use("/buses",busRoutes);
// Start server
app.listen(3000, () => {
    console.log(" Server running on http://localhost:3000");
});
