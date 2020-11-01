import React, { Component } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuCardComponent from "../components/MenuCardComponent";

class StoreView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeInfo: [],
      drinkMenu: [],
    };
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  // We should send users to error page if we get error back from sql querh
  componentDidMount() {
    let storeFromURL = encodeURIComponent(this.props.match.params.storeName);
    //console.log(storeFromURL);
    fetch(`http://localhost:8000/stores/storename/${storeFromURL}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          if (i === 0) {
            this.setState({ storeInfo: [data[i]] });
          } else {
            let combined = this.state.storeInfo.concat(data[i]);
            this.setState({ storeInfo: combined });
          }
        }
        //Set up drinksArray only once, if we place in render, it will continously loop for some reason.
        let drinksArray = this.state.storeInfo[0].menu.split(",");
        //console.log(drinksArray);
        for (let i = 0; i < drinksArray.length; i++) {
          let curDrink = { name: drinksArray[i] };
          //console.log(curDrink);
          this.setState({
            drinkMenu: this.state.drinkMenu.concat([curDrink]),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    //If we found a store, it should be stored in array of objects
    //Since we use LIKE % in our SQL query, im just assuming first object returned is the closest to the url param
    if (this.state.storeInfo.length > 0) {
      document.getElementById(
        "storeName"
      ).innerHTML = this.state.storeInfo[0].storeName;
      document.getElementById("storeAddress").innerHTML =
        this.state.storeInfo[0].city +
        " | " +
        this.state.storeInfo[0].street +
        " | " +
        this.state.storeInfo[0].state +
        " | " +
        this.state.storeInfo[0].zip;
      document.getElementById("ice_level").innerHTML =
        "Ice Levels: " + this.state.storeInfo[0].ice_level.toUpperCase();
      document.getElementById("sugar_level").innerHTML =
        "Sugar Levels: " + this.state.storeInfo[0].sugar_level;
    }

    let menuCards = this.state.drinkMenu.map((drink) => {
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
        <h1 id="storeName">Shop Name</h1>
        <h3 id="storeAddress">Address</h3>

        <Container>
          <Container className="form" className="list-group">
            {" "}
            Drink Options:
            <h6 id="ice_level" className="list-group-item">
              Category 1
            </h6>
            <h6 id="sugar_level" className="list-group-item">
              Category 2
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
}

export default StoreView;
