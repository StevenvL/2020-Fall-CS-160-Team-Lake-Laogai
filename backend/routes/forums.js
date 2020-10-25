var express = require('express');
var router = express.Router();
var connection = require('../sql_conn');

router.get('/', function(req, res){
    const sqlQuery = "SELECT category_name FROM forums"
    connection.query(sqlQuery, function(err, results){
        if(err) throw err
        console.log(results);
        res.json(results)
    }) 
})

module.exports = router;