import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Axios from "axios";
import FormComponent from "../components/FormComponent";
import "../styling.css"

function ForumCommentForm(props) {
  const [comment, setComment] = useState("");

  const sendData = () => {
    const url = "http://localhost:8000/forums/post/comment";
    const userInputData = { comment: comment, postID: props.postid };
    Axios.post(url, userInputData) // post request to api
      .then((res) => console.log("Data Sent"))
      .catch((err) => console.log(err));
  };

  return (
    <Col>
      <Form className="commentForm">
        <FormComponent
          label="Comment"
          placeholder="Share you comment here! "
          setInput={setComment}
          className="comment-field"
        />
        <Button
          variant="primary"
          type="submit"
          className="float-right"
          onClick={sendData}
          className="comment-submit"
        >
          Comment
        </Button>
      </Form>
    </Col>
  );
}

export default ForumCommentForm;
