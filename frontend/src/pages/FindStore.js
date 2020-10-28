import React, { useEffect, useState } from "react";
import {
  Container,
  Jumbotron,
  ButtonGroup,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import FilterButton from "../components/FilterButton";
import StoreRatings from "../components/StoreRatings";

function FindStore() {
  const [stores, setStores] = useState([]);

  /* get all stores from backend api */
  useEffect(() => {
    const getAllStores = async () => {
      try {
        const response = await axios(`http://localhost:8000/stores`);
        // console.log("response", response.data);
        setStores(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    setTimeout(getAllStores, 0);
  }, []);
  console.log("stores", stores);

  const drinkTypeArr = [
    "Organic",
    "Black Tea",
    "Green Tea",
    "Alternative Milk",
    "Oolong Tea",
    "Brown Sugar",
  ];
  let filterButtons = drinkTypeArr.map((type, index) => {
    return <FilterButton name={type} key={index} index={index} />;
  });

  function uppercase(str) {
    var array1 = str.split(" ");
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
      newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(" ");
  }

  return (
    <Container>
      <Jumbotron className="search-boba">
        <form className="col-lg-6 offset-lg-3 search-form" action="POST">
          <input
            className="form-control findStoreInput"
            type="search"
            placeholder="Find Boba Store"
          />
          <button
            className="btn btn-normal my-sm-0"
            id="searchButtonOuter"
            type="submit"
          >
            <div className="searchButton"></div>
          </button>
        </form>
      </Jumbotron>
      <Row>
        <Col md={{ offset: 9 }}>
          <Button href="/addStore">
            Found a new store?<br></br>Add here!
          </Button>
        </Col>
      </Row>
      <ButtonGroup size="lg" className="mb-2 filterButtons">
        {/* <Button className="filterButton button1">Organic</Button> */}
        {filterButtons}
      </ButtonGroup>

      {stores.length === 0 ? (
        <div className="loadingDiv">
          <img
            src="https://res.cloudinary.com/headincloud/image/upload/v1603878332/bobaStoreLoading_lwcxua.gif"
            alt="loadingGif"
          />
          <p>Loading all the stores...</p>
        </div>
      ) : (
        stores.map(function (store, index) {
          return (
            <div className="singleStoreDiv" key={index}>
              <Link to={`/stores/${store.storeName}`}>{store.storeName}</Link>
              <p>
                Address: {store.street}, {store.city}, {store.state}
                <br></br>
                Menu: {store.menu}
                <br></br>
                Ice Level: {uppercase(store.ice_level)}
                <br></br>
                Sugar Level: {store.sugar_level.split(",").join("% ") + "%"}
                <br></br>
                Ratings: <StoreRatings ratings={store.avg_rating} />
              </p>
            </div>
          );
        })
      )}
    </Container>
  );
}

export default FindStore;
