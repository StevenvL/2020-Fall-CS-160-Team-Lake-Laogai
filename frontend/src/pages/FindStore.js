import React from "react";
import { Container, Jumbotron, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import FilterButton from "../components/FilterButton";

function FindStore() {
  const dummyStores = ["store1", "store2"];
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
        {/* <Button className="filterButton button1">Organic</Button> */}
        {filterButtons}
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
