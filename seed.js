const User = require("./models/User");
const Bus = require("./models/Bus");

(async () => {
    
    // Insert Users
    await User.create({ name: "Alice", email: "alice@example.com" });
    await User.create({ name: "Bob", email: "bob@example.com" });
    await User.create({ name: "Charlie", email: "charlie@example.com" });

    // Insert Buses
    await Bus.create({ busNumber: "BUS100", totalSeats: 50, availableSeats: 20 });
    await Bus.create({ busNumber: "BUS200", totalSeats: 40, availableSeats: 5 });

    console.log("Sample data inserted!");
})();
