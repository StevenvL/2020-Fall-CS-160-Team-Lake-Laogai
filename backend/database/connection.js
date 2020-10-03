// Node.js can use this module to manipulate the MySQL database
const mysql = require("mysql");

// Creating a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jennyroot",
  database: "pokeboba",
  multipleStatements: true,
});

// Connection is being made...
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;
