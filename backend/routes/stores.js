/*Stores Info Backend APIs*/
var express = require('express');
var router = express.Router();
var connection = require('../sql_conn');

/* GET all stores */
/* When user select nothing from the search box or filter, this function retrieves all the stores in the database*/
router.get('/', function(req, res, next) {
    /*error takes care the error if happened during the query
	results conatins the results of the query
	fields contains information about the returned results field
    */
    connection.query("SELECT storeName, street, city, state, zip, avg_rating, menu, sugar_level, ice_level FROM stores", 
    function(error, results, fields) {
        if( error ) throw error;
        console.log(results);
        res.json(results);
    });
});


/* GET stores from store name */
/* When user select a store name, this function retrive the store infomation of
the database. It would get the desired store info even if the user only input a partial store name*/
router.get('/storename/:storeName', function(req, res, next) {
    let storeName = req.params["storeName"];
    connection.query(`SELECT storeName, street, city, state, zip, avg_rating, menu, sugar_level, ice_level FROM stores 
    WHERE storeName LIKE '%${storeName}%'`, function(error, results, fields) {
  	if( error ) throw error;
  	console.log(results);
  	res.json(results);
  });
});


/* GET stores by drink type */
/* This function retrieves the corresponding store information based on the drink type filter*/
router.get('/drinktype/:typename', function(req, res, next) {
    let typename = req.params["typename"];
    connection.query(`SELECT storeName, street, city, state, zip, avg_rating, menu, sugar_level, 
    ice_level FROM drink_type JOIN store_drink_type USING(typeID) JOIN stores USING(storeID) WHERE 
    typename = '${typename}'`, function(error, results, fields) {
  	if( error ) throw error;
  	console.log(results);
  	res.json(results);
  });
});


/* GET stores by city and state */
/* This function retrieves the desired store information based on the user's city and state input*/
router.get('/citystate/:city/:state', function(req, res, next) {
    let city = req.params["city"];
    let state = req.params["state"];
    connection.query(`SELECT storeName, street, city, state, zip, avg_rating, menu, sugar_level, 
    ice_level FROM stores WHERE city = "${city}" AND state = "${state}"`, function(error, results, fields) {
  	if( error ) throw error;
  	console.log(results);
  	res.json(results);
  });
});


/* GET stores by zip code*/
/* This function retrieves the desired store information based on the user's zip input*/
router.get('/zip/:zip', function(req, res, next) {
    let zip = req.params["zip"];
    connection.query(`SELECT storeName, street, city, state, zip, avg_rating, menu, sugar_level, 
    ice_level FROM stores WHERE zip = '${zip}'`, function(error, results, fields) {
  	if( error ) throw error;
  	console.log(results);
  	res.json(results);
  });
});


module.exports = router;
