import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import axios from "axios";

function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    /* get users from backend api */
    const getUsers = async () => {
      try {
        const response = await axios(`http://localhost:8000/users`);
        console.log("getUsers", response.data);
        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <Container className="componentBody">
      <h1>Home</h1>
      <p>result fetched:</p>
      <Container className="home-text">
        <Row>
          <Col>
            <img className="home-image" src="/boba.jpg" alt="boba" />
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. S ed
              arcu non odio euismod lacinia at. Diam maecenas sed enim ut sem
              viverra aliquet eget sit. Senectus et netus et malesuada fames ac
              turpis. Proin fermentum leo vel orci. In iaculis nunc sed augue.
              Tellus cras adipiscing enim eu turpis egestas pretium aene an
              pharetra. Augue eget arcu dictum varius duis at consectetur lorem
              donec. Sem et tortor consequat id porta nibh venenatis cras sed.
              Quis blandit turpis cursus in hac habitasse platea dictumst
              quisque. Leo vel orci porta non pulvinar neque. Amet tellus cras
              adipiscing enim eu turpis. Sed viverra tellus in hac habitasse
              platea dictumst vestibulum. Venenatis urna cursus eget nunc
              scelerisque viverra mauris in aliquam.
            </p>
            <p>
              Vulputate eu scelerisque felis imperdiet proin. Nec ultrices dui
              sapien eget mi proin sed libero enim. Faucibus interdum posuere
              lorem ipsum dolor sit amet. Sem fringilla ut morbi tincidunt augue
              interdum velit euismod. Luctus venenatis lectus magna fringilla
              urna porttitor rhoncus dolor purus. Id venenatis a condimentum
              vitae sapien pellentesque habitant morbi. Fringilla urna porttitor
              rhoncus dolor purus non enim praesent. Aliquam nulla facilisi cras
              fermentum odio eu. Malesuada fames ac turpis egestas integer eget.
              Vitae turpis massa sed elementum tempus egestas sed. Arcu bibendum
              at varius vel pharetra vel turpis. Fusce ut placerat orci nulla
              pellentesque dignissim enim sit amet.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
