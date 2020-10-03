// get express, get the server running!
const express = require("express");
const mysql = require("mysql");

// include other dependencies
const parser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");

// include the router
// const songsRouter = require("./controllers/songs");

const app = express();

// app.use all the middlewares
app.use(parser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

// // app.use the router
// app.use("/api", songsRouter);

// Creating a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jennyroot",
  database: "pokeboba",
  multipleStatements: true,
});

connection.connect((err) => {
  if (!err) {
    console.log("Connected!");
  } else {
    console.log("Connect failed!", err);
  }
});

// set port
app.set("port", process.env.PORT || 4000);
// start listening!
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
