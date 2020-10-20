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
            className="form-control mb-2 mr-sm-2"
            type="search"
            placeholder="Search Boba Store"
          />
          <button className="btn btn-normal my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </Jumbotron>

      <ButtonGroup size="lg" className="mb-2 filterButtons">
        <Button className="btn-filter button1">Organic</Button>
        <Button className="btn-filter">Black Tea</Button>
        <Button className="btn-filter">Green Tea</Button>
        <Button className="btn-filter">Alternative Milk</Button>
        <Button className="btn-filter">Oolong Tea</Button>
        <Button className="btn-filter">Brown Sugar</Button>
      </ButtonGroup>

      {dummyStores.map(function (name, index) {
        return (
          <div className="singleStoreDiv">
            <Link to={`/stores/${name}`}>{name}</Link>
          </div>
        );
      })}
    </Container>
  );
}

export default FindStore;
