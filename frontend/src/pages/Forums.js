import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styling.css"

function Forums() {
  const [forums, setForums] = useState([]);

  useEffect(() => {
    /* get all stores from backend api */
    const getForums = async () => {
      try {
        const response = await axios(`http://localhost:8000/forums`);
        setForums(response.data);
        console.log("getForums", response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getForums();
  }, []);

  const forumList = forums.map((forum, index) => {
    return (
      <div key={index} className="forumCard">
        <Link
          to={{
            pathname: `/forums/${forum.category_name}`,
          }}
        >
          {forum.category_name}
        </Link>
      </div>
    );
  });

  return (
    <Container className="forumContainer">
      <h1>Forum Categories</h1>
      <div className="forumCategoriesBox">{forumList}</div>
    </Container>
  );
}

export default Forums;
