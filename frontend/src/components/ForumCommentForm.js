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
      <Form>
        <FormComponent
          label="Comment"
          placeholder="Share you comment here! "
          setInput={setComment}
        />
        <Button
          variant="primary"
          type="submit"
          className="float-left"
          onClick={sendData}
        >
          Comment
        </Button>
        <Button
          variant="secondary"
          className="float-right"
          onClick={()=>props.setShowCommentForm(false)}
        >
          Cancel
        </Button>
      </Form>
    </Col>
  );
}

export default ForumCommentForm;
