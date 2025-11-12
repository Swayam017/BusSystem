const db = require("../utils/db_connections");

// POST /users → Add user
const addUser = (req, res) => {
    const { name, email } = req.body;

    const query = `INSERT INTO users (name, email) VALUES (?, ?)`;
    db.execute(query, [name, email], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error adding user");
        }
        res.status(201).send(` User '${name}' added successfully`);
    });
};

// GET /users → Retrieve all users
const getAllUsers = (req, res) => {
    const query = `SELECT * FROM users`;
    db.execute(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error fetching users");
        }
        res.status(200).json(results);
    });
};

module.exports = { addUser, getAllUsers };
