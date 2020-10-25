var express = require('express');
var router = express.Router();
var connection = require('../sql_conn');

router.get('/', function(req, res, next) { 
});

router.get('/posts/comments/:postid', function(req, res, next) {
	let postid = req.params["postid"];
	connection.query(`SELECT * FROM forum_reply WHERE postid=${postid}`, function(error, results, fields) {
  	if( error ) throw error;
  	console.log(results);
  	res.json(results);
  });
});

router.get('/posts/:postid', function(req, res, next) {
	let postid = req.params["postid"];
	connection.query(`SELECT * FROM forum_posts WHERE forumPostID=${postid}`, function(error, results, fields) {
  	if( error ) throw error;
  	console.log(results);
  	res.json(results);
  });
});

router.post('/post/comment', function(req, res, next) {
	let postid = req.body.postID;
	let comment = req.body.comment;
	connection.query(`INSERT INTO forum_reply (postID, replyDescription) VALUES (${postid}, '${comment}');`, function(error, results, fields) {
  	if( error ) {console.log(error);};
  	console.log(results);
  	res.json(results);
  });  
});

module.exports = router;