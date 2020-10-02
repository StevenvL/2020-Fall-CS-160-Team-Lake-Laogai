var express = require('express');
// bring mysql, require mysql module
var mysql = require('mysql');
var connection = require('./database');


// create mysql connection
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cs160boba!',
  //database: 'pokemyql',
  port: '3306',
  database: 'PokeBobaDB'

});

// connect
db.connect((err) => {
  if (!err){
    //throw err;
    //console.error('Error connecting: ' + err.stack);
    console.log("Sorry, An error occurs for Mysql connection.");
  }
  console.log('Mysql Connected!');
});


// set express server
var router = express();

router.get('/', function(req, res, next) {
    res.send('DB works properly');
});

module.exports = router;