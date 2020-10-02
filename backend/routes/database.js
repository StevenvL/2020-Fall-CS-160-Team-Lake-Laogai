var express = require('express');
var mysql = require('mysql');


// create mysql connection
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cs160boba!',
  //database: 'pokemyql',
  //port: '3306',
  database: 'PokeBobaDB',
  multipleStatements: true

});

// connect
db.connect((err) => {
  if (err){
    //throw err;
    console.error('Error connecting: ' + err.stack);
    console.log("Sorry, An error occurs for Mysql connection.");
  } else {
    console.log('Mysql Connected!');
  }
});


// set express server
var router = express();

router.get('/', function(req, res, next) {
    res.send('DB works properly');
});

module.exports = router;