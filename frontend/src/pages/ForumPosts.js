import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Button } from "react-bootstrap";
import "../styling.css";

function ForumPosts(props) {
  const [posts, setPosts] = useState([]);

  const forumCategoryName = props.match.params.category;
  useEffect(() => {
    console.log("ForumPosts props", props);
    console.log("props.match.params.category", props.match.params.category);
    
    /* get all posts of that forum category from backend api */
    const getPosts = async () => {
      try {
        const response = await axios(
          `http://localhost:8000/forums/posts/${forumCategoryName}`
        );
        setPosts(response.data);
        console.log("getPosts", response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, []);

  const allPosts = posts.map((post) => {
    return (
      <div className="postCard">
        <h1>{post.postTitle}</h1>
        <p>{post.postDescriptioni}</p>
        <Link
          to={{
            pathname: `/forums/${forumCategoryName}/${post.forumPostID}`,
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
        <Button href="/createpost" className="float-right">
          Post
        </Button>
        <br></br>
        <br></br>
        <h1 className="forumPostsTitle">{forumCategoryName}</h1>
      </div>
      {allPosts}
    </Container>
  );
}

export default ForumPosts;
