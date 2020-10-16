var express = require('express');
var router = express.Router();
var connection = require('./database');

router.get('/', function(req, res, next) {
    res.send('API works properly');
});


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     console.log('We are listing user tables...');
//     connection.query("SELECT * FROM user", function(error, results, fields) {ç
//         if( error ) throw error;
//         console.log(results);
//         res.json(results);
//     });
// });

// load user table
router.get('/usertable', (req, res) => {
    console.log('We are listing user tables...');
    let sql = 'SELECT * FROM user';
    connection.query(sql, (err, result) => {
        if(err) {
            console.log('Error occurs on listing tables.');
        }
        console.log(result);
        // send out to broswer
        res.send('Sample user table loaded!');
    });
  });


module.exports = router;