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
  const [drinkTypes, setDrinkTypes] = useState([]);
  const [selectedDrinkTypes, setSelectedDrinkTypes] = useState([]);
  const [filteredStores, setFilteredStores] = useState([]);

  useEffect(() => {
    /* get all stores from backend api */
    const getAllStores = async () => {
      try {
        const response = await axios(`http://localhost:8000/stores`);
        setStores(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    /* get all drink types from backend api */
    const getAllDrinkTypes = async () => {
      try {
        const response = await axios(`http://localhost:8000/stores/drinktypes`);
        setDrinkTypes(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    setTimeout(getAllStores, 2000);
    getAllDrinkTypes();
    setGoToStore("");
  }, []);

  // reload page once a different filter button is selected
  // render matching stores based on selected drink types
  useEffect(() => {
    setFilteredStores([]);
    const filtered = stores.filter((store) => {
      return store.menu
        .toLowerCase()
        .split(", ")
        .some((drinkType) => selectedDrinkTypes.includes(drinkType));
    });
    setFilteredStores(filtered);
  }, [selectedDrinkTypes]);

  // keep track of what drink types the user selects
  const handleSelectedDrinkTypes = (type) => {
    const tempTypes = [...selectedDrinkTypes];
    const typeIndex = tempTypes.indexOf(type.typename.toLowerCase());
    if (typeIndex !== -1) {
      tempTypes.splice(typeIndex, 1);
      console.log(`Removing ${type.typename.toLowerCase()} from selectedDrinkTypes...`);
    } else {
      tempTypes.push(type.typename.toLowerCase());
      console.log(`Pushing ${type.typename.toLowerCase()} to selectedDrinkTypes...`);
    }
    setSelectedDrinkTypes(tempTypes);
  };

  // render all the drink types as buttons
  let filterButtons = drinkTypes.map((type, index) => {
    return (
      <FilterButton
        name={type.typename.toLowerCase()}
        key={index}
        index={index}
        handleSelectedDrinkTypes={() => handleSelectedDrinkTypes(type)}
      />
    );
  });

  // search bar input onChange function
  const editSearchStore = (e) => {
    setSearchStore(e.target.value);
    setFoundStore(false);
  };

  // get all the available stores based on the user's input in the search bar
  const dynamicSearch = () => {
    if (searchStore === "") {
      return [];
    } else {
      return stores.filter((store) =>
        store.storeName.toLowerCase().includes(searchStore.toLowerCase())
      );
    }
  };

  // user can use keyboard to select items in the search suggestion list
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

  // search bar form onSubmit function
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("handleFormSubmit e:", e.target[0].value);
    setGoToStore(e.target[0].value);
  };

  // go to the store info page based on the search bar input
  if (goToStore.length !== 0) {
    return <Redirect to={`/stores/${goToStore}`} />;
  }

  // render the corresponding stores
  let storesToRender;
  if (selectedDrinkTypes.length === 0) {
    if (stores.length === 0) {
      storesToRender = (
        <div className="loadingDiv">
          <img
            src="https://res.cloudinary.com/headincloud/image/upload/v1603878332/bobaStoreLoading_lwcxua.gif"
            alt="loadingGif"
          />
          <p>Loading all the stores...</p>
        </div>
      );
    } else {
      storesToRender = stores.map(function (store, index) {
        return (
          <div className="singleStoreDiv" key={index}>
            <div>
              <Link to={`/stores/${store.storeName}`}>{store.storeName}</Link>
              <p>
                <span>Address: </span>
                {store.street}, {store.city}, {store.state}
                <br></br>
                <span>Menu: </span>
                <span id="storeMenu">{store.menu}</span>
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
          </div>
        );
      });
    }
  } else {
    if (filteredStores.length === 0) {
      storesToRender = (
        <div className="loadingDiv">
          <img
            src="https://res.cloudinary.com/headincloud/image/upload/v1604239389/giphybobaempty_gyo4u4.gif"
            alt="sorry no match"
          />
          <p>Sorry, no matches...</p>
        </div>
      );
    } else {
      storesToRender = filteredStores.map(function (store, index) {
        return (
          <div className="singleStoreDiv" key={index}>
            <div>
              <Link to={`/stores/${store.storeName}`}>{store.storeName}</Link>
              <p>
                <span>Address: </span>
                {store.street}, {store.city}, {store.state}
                <br></br>
                <span>Menu: </span>
                <span id="storeMenu">{store.menu}</span>
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
          </div>
        );
      });
    }
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

      {storesToRender}
    </Container>
  );
}

export default FindStore;
