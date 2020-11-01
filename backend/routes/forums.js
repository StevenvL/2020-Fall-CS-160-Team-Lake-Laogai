var express = require("express");
var router = express.Router();
var connection = require("../sql_conn");

router.get("/", function (req, res) {
  const sqlQuery = "SELECT * FROM forums";
  connection.query(sqlQuery, function (err, results) {
    if (err) throw err;
    console.log(results);
    res.json(results);
  });
});

router.get("/posts", function (req, res) {
  const sqlQuery = "SELECT * FROM forum_posts";
  connection.query(sqlQuery, function (err, results) {
    if (err) throw err;
    console.log(results);
    res.json(results);
  });
});

router.get("/posts/:forumid", function (req, res, next) {
  let forumid = req.params["forumid"];
  connection.query(
    `SELECT * FROM forum_posts WHERE forumID=${forumid}`,
    function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);
    }
  );
});

router.get("/posts/:postid", function (req, res, next) {
  let postid = req.params["postid"];
  connection.query(
    `SELECT * FROM forum_posts WHERE forumPostID=${postid}`,
    function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);
    }
  );
});

router.get("/posts/comments/:postid", function (req, res, next) {
  let postid = req.params["postid"];
  connection.query(
    `SELECT * FROM forum_reply WHERE postid=${postid}`,
    function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);
    }
  );
});

router.post("/post/comment", function (req, res, next) {
  let postid = req.body.postID;
  let comment = req.body.comment;
  connection.query(
    `INSERT INTO forum_reply (postID, replyDescription) VALUES (${postid}, '${comment}');`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      }
      console.log(results);
      res.json(results);
    }
  );
});

router.post("/post", function (req, res, next) {
  let forumPostTitle = req.body.forumTitle;
  let forumPostBody = req.body.forumBody;
  let forumCategory = req.body.forumCategory;
  let userID = req.body.userID;
  console.log(
    `we got ${forumCategory}, ${userID}, '${forumPostTitle}', '${forumPostBody}`
  );
  //We ignore forumPostID and Timestamp. SQL inserts those automatically if we dont specify.
  connection.query(
    `INSERT INTO forum_posts (forumID, userid, postTitle, postDescriptioni) VALUES (${forumCategory}, ${userID}, '${forumPostTitle}', '${forumPostBody}');`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      }
      console.log(results);
      res.json(results);
    }
  );
});

module.exports = router;
