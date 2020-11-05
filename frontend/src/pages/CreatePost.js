import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import "../styling.css";

function CreatePost(props) {
  const [selectedForumID, setSelectedForumID] = useState(1);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [userID, setUserID] = useState(1);
  const [forumCategories, setForumCategories] = useState([]);
  const [selectedForumCategory, setSelectedForumCategory] = useState("");

  console.log("CreatePost props", props);

  useEffect(() => {
    const getForumCategories = async () => {
      try {
        const response = await axios(`http://localhost:8000/forums`);
        setForumCategories(response.data)
        console.log("getForumCategories", response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getForumCategories();
  }, []);

  //Will call backend api to post information to database
  //We should probably add some text validation before submission?
  const handleSubmit = (event) => {
    event.preventDefault(); //Doesn't Refresh page after submit. Prolly need to write some method to reset fields and print whether suceeded or not!

    fetch(`http://localhost:8000/forums/post`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        forumCategoryID: selectedForumID,
        forumTitle: postTitle,
        forumBody: postBody,
        userID: userID,
      }),
    });
  };

  const handleClick = () =>{
    props.history.goBack()
  }

  //Need to change contaner className!!!
  //I want it too look similar but don't know what to change it to.

  //console.log(this.state.selectedForumID);
  //console.log(this.state.postTitle);
  return (
    <Container className="login-container login-component">
      <h1>Create a forum post</h1>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group controlId="forumCategory">
          <Form.Label>Select Forum Category</Form.Label>
          <Form.Control
            as="select"
            value={selectedForumID}
            onChange={(e) => {
                console.log("here!!!", e.target.value)
                setSelectedForumID(e.target.value)
                setSelectedForumCategory(forumCategories[e.target.value-1].category_name)
            }}
          >
            {forumCategories.map((category) => (
              <option key={category.forumID} value={category.forumID}>
                {category.category_name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="forumTitle">
          <Form.Label>Forum Title</Form.Label>
          <Form.Control
            required
            placeholder="Forum Title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="forumBodyGroup">
          <Form.Label>Forum Body</Form.Label>
          <Form.Control
            required
            as="textarea"
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />
        </Form.Group>

        <Button href={`/forums/${selectedForumCategory}`} variant="normal" type="submit">
          Submit
        </Button>
        <Button onClick={handleClick} variant="normal" className="ml-5">
          Cancel
        </Button>
      </Form>
    </Container>
  );
}

export default CreatePost;
