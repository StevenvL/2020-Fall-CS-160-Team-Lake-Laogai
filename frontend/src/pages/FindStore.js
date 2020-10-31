import React, { useEffect, useState } from "react";
import {
  Container,
  Jumbotron,
  ButtonGroup,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import FilterButton from "../components/FilterButton";
import StoreRatings from "../components/StoreRatings";
import SearchSuggestionList from "../components/SearchSuggestionList";

function FindStore() {
  const [stores, setStores] = useState([]);
  const [searchStore, setSearchStore] = useState("");
  const [foundStore, setFoundStore] = useState(false);
  const [goToStore, setGoToStore] = useState("");
  const [activeFilteredStoreIndex, setActiveFilteredStoreIndex] = useState(0);

  /* get all stores from backend api */
  useEffect(() => {
    const getAllStores = async () => {
      try {
        const response = await axios(`http://localhost:8000/stores`);
        setStores(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    setTimeout(getAllStores, 2000);
    setGoToStore("");
  }, []);
  console.log("stores", stores);
  console.log("searchStore", searchStore);

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

  // function uppercase(str) {
  //   var array1 = str.split(" ");
  //   var newarray1 = [];

  //   for (var x = 0; x < array1.length; x++) {
  //     newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  //   }
  //   return newarray1.join(" ");
  // }

  const editSearchStore = (e) => {
    setSearchStore(e.target.value);
    setFoundStore(false);
  };

  const dynamicSearch = () => {
    if (searchStore == "") {
      return [];
    } else {
      return stores.filter((store) =>
        store.storeName.toLowerCase().includes(searchStore.toLowerCase())
      );
    }
  };

  const onKeyDown = (e) => {
    if (searchStore === "") {
      setActiveFilteredStoreIndex(0);
    }
    let filtered = dynamicSearch();
    if (e.keyCode === 13) {
      setSearchStore(filtered[activeFilteredStoreIndex].storeName);
      setFoundStore(true);
      setActiveFilteredStoreIndex(0);
    } else if (e.keyCode === 38) {
      if (activeFilteredStoreIndex === 0) {
        setActiveFilteredStoreIndex(filtered.length - 1);
      } else {
        setActiveFilteredStoreIndex(activeFilteredStoreIndex - 1);
      }
    } else if (e.keyCode === 40) {
      if (activeFilteredStoreIndex === filtered.length - 1) {
        setActiveFilteredStoreIndex(0);
      } else {
        setActiveFilteredStoreIndex(activeFilteredStoreIndex + 1);
      }
    }
    console.log("activeFilteredStoreIndex", activeFilteredStoreIndex);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("handleFormSubmit e:", e.target[0].value);
    setGoToStore(e.target[0].value);
  };

  if (goToStore.length !== 0) {
    return <Redirect to={`/stores/${goToStore}`} />;
  }

  return (
    <Container>
      <Jumbotron className="search-boba">
        <form
          className="col-lg-6 offset-lg-3 search-form"
          onSubmit={handleFormSubmit}
        >
          <input
            className="form-control findStoreInput"
            type="search"
            value={searchStore}
            onChange={editSearchStore}
            onKeyDown={onKeyDown}
            placeholder="Find A Boba Store"
          />
          <button
            className="btn btn-normal my-sm-0"
            id="searchButtonOuter"
            type="submit"
          >
            <div className="searchButton"></div>
          </button>
        </form>
        <SearchSuggestionList
          filteredStores={dynamicSearch()}
          setSearchStore={setSearchStore}
          ifTypedWords={searchStore !== ""}
          foundStore={foundStore}
          setFoundStore={setFoundStore}
          activeFilteredStoreIndex={activeFilteredStoreIndex}
        />
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
                <span>Address: </span>
                {store.street}, {store.city}, {store.state}
                <br></br>
                <span>Menu: </span>
                {store.menu}
                <br></br>
                <span>Ice Level: </span>
                {store.ice_level.split(",").join("% ") + "%"}
                <br></br>
                <span>Sugar Level: </span>
                {store.sugar_level.split(",").join("% ") + "%"}
                <br></br>
                <span>Ratings</span> <StoreRatings ratings={store.avg_rating} />
              </p>
            </div>
          );
        })
      )}
    </Container>
  );
}

export default FindStore;
