var express = require('express');
var router = express.Router();
var connection = require('../sql_conn');

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

// /* GET stores from store name. */
// router.get('/', function(req, res, next) {
//     connection.query("SELECT storeName FROM stores", function(error, results, fields) {
//         if( error ) throw error;
//         console.log(results);
//         res.json(results);
//     });
//   });

/*
const findUser = function(username, connection) {
	return new Promise(function(resolve, reject){
		connection.query('SELECT * FROM users')
		.then(function(result){
			result.
		})
	})
	.catch(function (error) {
		reject(error);
	});
}
*/
module.exports = router;
