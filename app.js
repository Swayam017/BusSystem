const express = require('express');
const app = express();
const mysql = require('mysql2');

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mitaliguli017#',
    database: 'testdb'
});

connection.connect((err) => {
    if (err) {
        console.error(" Database Connection Failed:", err);
        return;
    }
    console.log(" MySQL Connected Successfully");
});

// SQL Queries to create tables
const createUsersTable = `
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50)
)`;

const createBusesTable = `
CREATE TABLE IF NOT EXISTS Buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(20),
    totalSeats INT,
    availableSeats INT
)`;

const createBookingsTable = `
CREATE TABLE IF NOT EXISTS Bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT
)`;

const createPaymentsTable = `
CREATE TABLE IF NOT EXISTS Payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid DECIMAL(10,2),
    paymentStatus VARCHAR(20)
)`;

// Execute queries one by one
connection.query(createUsersTable, (err) => {
    if (err) console.error(" Error creating Users table:", err);
    else console.log(" Users table ready");
});

connection.query(createBusesTable, (err) => {
    if (err) console.error(" Error creating Buses table:", err);
    else console.log(" Buses table ready");
});

connection.query(createBookingsTable, (err) => {
    if (err) console.error(" Error creating Bookings table:", err);
    else console.log(" Bookings table ready");
});

connection.query(createPaymentsTable, (err) => {
    if (err) console.error("Error creating Payments table:", err);
    else console.log(" Payments table ready");
});

// Basic route
app.get("/", (req, res) => {
    res.send(" Welcome to Bus Booking System");
});

// Start server
app.listen(3000, () => {
    console.log(" Server running on http://localhost:3000");
});
