import React from "react";
import { Container, Jumbotron, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function FindStore() {
  const dummyStores = ["store1", "store2"];

  return (
    <Container>
      <Jumbotron className="search-boba">
        <form className="col-lg-6 offset-lg-3 search-form" action="POST">
          <input
            className="form-control"
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

      <ButtonGroup size="lg" className="mb-2 filterButtons">
        <Button className="filterButton button1">Organic</Button>
        <Button className="filterButton">Black Tea</Button>
        <Button className="filterButton">Green Tea</Button>
        <Button className="filterButton">Alternative Milk</Button>
        <Button className="filterButton">Oolong Tea</Button>
        <Button className="filterButton">Brown Sugar</Button>
      </ButtonGroup>

      {dummyStores.map(function (name, index) {
        return (
          <div className="singleStoreDiv" key={index}>
            <Link to={`/stores/${name}`}>{name}</Link>
          </div>
        );
      })}
    </Container>
  );
}

export default FindStore;
