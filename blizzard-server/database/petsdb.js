require("dotenv").config();
const fs = require("fs");
const mysql = require("mysql2");


// const mounts = require("../../SQL/mounts.data.json")

// Read the JSON file
const jsonData = fs.readFileSync("SQL/pets.data.json");
const data = JSON.parse(jsonData);

// Separate the data into two sets based on your logic
const dataSet1 = data.map(item => ({ name: item.name, id: item.id }));

// Create a MySQL connection
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME} = process.env;
const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
});

// Insert data from the first set into the first table
dataSet1.forEach((data) => {
  const things = "INSERT INTO pets (name, id) VALUES (?, ?)";
  const values = [data.name, data.id];
  connection.query(things, values, (err) => {
    if (err) {
      console.error(err);
    }
  });
});


// Close the connection
connection.end();