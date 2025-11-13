const express = require("express");
const app = express();

app.use(express.json());

app.use("/users", require("./routes/userRoutes"));
app.use("/buses", require("./routes/busRoutes"));

app.listen(3000, () => console.log("Server running on port 3000"));
