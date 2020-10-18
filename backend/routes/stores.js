/*Stores Info Backend APIs*/
var express = require('express');
var router = express.Router();
var connection = require('../sql_conn');

/* GET all stores */
router.get('/', function(req, res, next) {
    /*error takes care the error if happened during the query
	results conatins the results of the query
	fields contains information about the returned results field
    */
    connection.query("SELECT * FROM stores", function(error, results, fields) {
        if( error ) throw error;
        console.log(results);
        res.json(results);
    });
});

/* GET stores from store name. */
router.get('/:storeName', function(req, res, next) {
    let storeName = req.params["storeName"];
    //console.log(storeName);
  connection.query(`SELECT * FROM stores WHERE storeName LIKE '%${storeName}%'`, function(error, results, fields) {
  	if( error ) throw error;
  	console.log(results);
  	res.json(results);
  });
});




module.exports = router;
