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

// router.get("/posts/:forumid", function (req, res, next) {
//   let forumid = req.params["forumid"];
//   connection.query(
//     `SELECT * FROM forum_posts WHERE forumID=${forumid}`,
//     function (error, results, fields) {
//       if (error) throw error;
//       console.log(results);
//       res.json(results);
//     }
//   );
// });

router.get("/posts/:forumname", function (req, res, next) {
  let forumname = req.params["forumname"];
  connection.query(
    `SELECT * FROM forum_posts JOIN forums USING(forumID) WHERE category_name = '${forumname}'`,
    function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);
    }
  );
});

router.get("/post/:postid", function (req, res, next) {
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

router.post("/post", function (req, res, next) {
  const forumPostTitle = req.body.forumTitle;
  const forumPostBody = req.body.forumBody;
  const forumCategoryID = req.body.forumCategoryID;
  const userID = req.body.userID;
  console.log(
    `we got ${forumCategoryID}, ${userID}, '${forumPostTitle}', '${forumPostBody}`
  );
  //We ignore forumPostID and Timestamp. SQL inserts those automatically if we dont specify.
  connection.query(
    `INSERT INTO forum_posts (forumID, userid, postTitle, postDescriptioni) VALUES (${forumCategoryID}, ${userID}, '${forumPostTitle}', '${forumPostBody}');`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      }
      console.log(results);
      res.json(results);
    }
  );
  // const insertSql =
  //   "INSERT INTO forum_posts (forumID, userid, postTitle, postDescriptioni) VALUES (?,?,?,?)";
  // connection.query(
  //   insertSql,
  //   [forumCategoryID, userID, forumPostTitle, forumPostBody],
  //   (err, result) => {
  //     if (err) {
  //       console.log("hello error?????: ",err);
  //     }
  //     console.log("Number of records inserted wow here: " + result.affectedRows);
  //   }
  // );
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



module.exports = router;
