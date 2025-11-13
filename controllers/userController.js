const User = require("../models/User");

// POST /users
exports.addUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).send("User created successfully");
    } catch (error) {
        res.status(500).send("Error creating user");
    }
};

// GET /users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).send("Error fetching users");
    }
};
