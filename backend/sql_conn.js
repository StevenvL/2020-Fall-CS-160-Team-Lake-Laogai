const mysql = require('mysql');


let connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'laogai',
  password: 'boba',
  database: 'pokebobaschema',
  port: '3306'
});

connection.connect(function(err) {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
    console.log('Connected as thread id: ' + connection.threadId);
  });
 
module.exports = connection;
