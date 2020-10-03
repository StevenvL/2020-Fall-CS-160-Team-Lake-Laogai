// Node.js can use this module to manipulate the MySQL database
const mysql = require("mysql");

// Creating a connection to the database
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "laogai",
  password: "boba",
  database: "pokeboba",
  port: "3306",
});

// Connection is being made...
connection.connect((err) => {
  //   if (err) throw err;
  //   console.log("Connected!");
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as thread id: " + connection.threadId);
});

module.exports = connection;
