import React, { useEffect, useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import ForumCommentForm from "../components/ForumCommentForm";
import "../styling.css"

function ForumPost(props) {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});

  const forumID = props.location.forumID;
  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios(
          `http://localhost:8000/forums/posts/comments/${props.match.params.postid}`
        );
        setComments(response.data);
        console.log("getComments response", response.data);
      } catch (err) {
        console.log(err);
      }
    };
    const getPost = async () => {
      try {
        const response = await axios(
          `http://localhost:8000/forums/post/${props.match.params.postid}`
        );
        setPost(response.data[0]);
        console.log("getPost response", response.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getComments();
    getPost();
  }, []);

  console.log("ForumPost props", props);

  const CommentBtn = () => (
    <Col xs={{ offset: 5 }}>
      <Button
        onClick={() => setShowCommentForm(!showCommentForm)}
        className="float-right comment"
      >
        Comment
      </Button>
    </Col>
  );

  return (
    <Container className="componentBody">
      {/* <a href="/forums">forum</a>/<a href="">{props.match.params.category}</a>/
      <a href="#">{post.postTitle}</a> */}
      <div className="readOthers" align="left">
        <Link to={`/forums`}>Read other forums</Link>
      </div>
      <div className="readOthers" align="left">
        <Link
          to={{
            pathname: `/forums/${props.match.params.category}`,
            forumID: `${forumID}`,
          }}
        >
          Read other posts
        </Link>
      </div>
      <h1>{post.postTitle}</h1>
      <Row>
        <Col>
          <Card className="user-info">
            <Card.Img variant="top" src="/logo.png" />
            <Card.Body>
              <Card.Subtitle>User Name</Card.Subtitle>
              <Card.Text>(Maybe some description on the user)</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={10}>
          <Card className="post-info">
            <Card.Title>{post.postTitle}</Card.Title>
            <br></br>
            <Card.Subtitle>{post.timestamp}</Card.Subtitle>
            <br></br>
            <Card.Text>{post.postDescriptioni}</Card.Text>
          </Card>
        </Col>
      </Row>
      <Row>
        {showCommentForm ? (
          <ForumCommentForm postid={props.match.params.postid} />
        ) : (
          <CommentBtn />
        )}
      </Row>
      {comments.map((entry, index) => (
        <Row key={index} className="mt-1 mb-1">
          <Col>
            <Card>
              <Card.Title></Card.Title>
              <Card.Subtitle>
                #{index}
                <span className="float-right">{entry.timestamp}</span>
              </Card.Subtitle>
              <Card.Body>
                <Card.Text>{entry.replyDescription}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default ForumPost;
