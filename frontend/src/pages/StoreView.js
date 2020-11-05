import React, { useState, useEffect } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import MenuCardComponent from "../components/MenuCardComponent";
import "../styling.css"

function StoreView(props) {
  const [storeInfo, setStoreInfo] = useState([]);
  const [drinkMenu, setDrinkMenu] = useState([]);

  useEffect(() => {
    /* get store info from backend api */
    let storeFromURL = props.match.params.storeName;
    const getStoreInfo = async () => {
      try {
        const response = await axios(
          `http://localhost:8000/stores/storename/${storeFromURL}`
        );
        setStoreInfo(response.data[0]);
        setDrinkMenu(response.data[0].menu.split(", "));
      } catch (err) {
        console.log(err);
      }
    };
    getStoreInfo();
  }, []);

  let menuCards = drinkMenu.map((drink) => {
    return (
      <Col sm="6">
        <MenuCardComponent drink={drink} />
      </Col>
    );
  });

  return (
    <Container className="componentBody">
      <Container className="form">
        <div className="findAnotherStore">
          <Link to={`/findStore`}>Find another store</Link>
        </div>
        <Image
          className="form"
          src="/tiger-boba-logo.jpeg"
          width="100px"
          thumbnail
        />
        <Image src="/tiger-boba.png" fluid />
      </Container>
      <h1 id="storeName">{storeInfo.storeName}</h1>
      <h3 id="storeAddress">
        {storeInfo.city} | {storeInfo.street} | {storeInfo.state} |{" "}
        {storeInfo.zip}
      </h3>

      <Container>
        <Container className="form" className="list-group">
          {" "}
          Drink Options:
          <h6 id="ice_level" className="list-group-item">
            {storeInfo.ice_level}
          </h6>
          <h6 id="sugar_level" className="list-group-item">
            {storeInfo.sugar_level}
          </h6>
        </Container>
      </Container>

      <Container className="componentBody" fluid>
        <h3>Menu</h3>
        <Row>{menuCards}</Row>
      </Container>
    </Container>
  );
}

export default StoreView;
