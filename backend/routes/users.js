var express = require('express');
var router = express.Router();
var connection = require('../sql_conn');

/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query("SELECT * FROM users", function(error, results, fields) {
  	if( error ) throw error;
  	console.log(results);
  	res.json(results);
  });
});

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
