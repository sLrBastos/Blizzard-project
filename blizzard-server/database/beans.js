const fs = require('fs');
require("dotenv").config();
const mysql = require('mysql2');
// const mounts = require("../../SQL/mounts.data.json")

// Read the JSON file
const jsonData = fs.readFileSync("../SQL/mounts.data.json");
const data = JSON.parse(jsonData);

// Separate the data into two sets based on your logic
const dataSet1 = data.map(item => ({ name: item.name, id: item.id }));
const dataSet2 = data.map(item => ({ href: item.key.href }));

// Create a MySQL connection
const { DB_HOST, DB_USER, DB_PASSWORD} = process.env;
const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
});

// Insert data from the first set into the first table
dataSet1.forEach((data) => {
  const query = "INSERT INTO mounts (name, id) VALUES (?, ?)";
  const values = [data.name, data.id];
  connection.query(query, values, (err) => {
    if (err) {
      console.error(err);
    }
  });
});

// Insert data from the second set into the second table
dataSet2.forEach((data) => {
  const query = "INSERT INTO refs (href) VALUES (?)";
  const values = [data.href];
  connection.query(query, values, (err) => {
    if (err) {
      console.error(err);
    }
  });
});

// Close the connection
connection.end();