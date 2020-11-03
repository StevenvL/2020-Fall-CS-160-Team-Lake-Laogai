import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { Container, Button } from "react-bootstrap";

function ForumPosts(props) {
  const [posts, setPosts] = useState([]);
  
  const forumID = props.location.forumID;
  useEffect(() => {
    console.log("ForumPosts props", props);
    /* get all stores from backend api */
    const getPosts = async () => {
      try {
        const response = await axios(
          `http://localhost:8000/forums/posts/${forumID}`
        );
        setPosts(response.data);
        console.log("getPosts", response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, []);

  const categoryName = props.location.category;
  const allPosts = posts.map((post) => {
    return (
      <div className="postCard">
        <h1>{post.postTitle}</h1>
        <p>{post.postDescriptioni}</p>
        <Link
          to={{
            pathname: `/forums/${categoryName}/${post.forumPostID}`,
            forumID: `${forumID}`,
          }}
        >
          Read more
        </Link>
      </div>
    );
  });
  return (
    <Container className="forumPosts">
      <div className="readAnotherForum">
        <Link to={`/forums`}>Read another forum</Link>
        <Button  href='/createpost' className="float-right">Post</Button>
      </div>
      {allPosts}
    </Container>
  );
}

export default ForumPosts;
