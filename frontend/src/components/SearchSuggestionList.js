import React, { useState } from "react";

function SearchSuggestionList({
  searchedStores,
  setSearchStore,
  ifTypedWords,
  foundStore,
  setFoundStore,
}) {
  console.log("searchedStores", searchedStores);
  console.log("ifTypedWords", ifTypedWords);

  const selectThisStore = (e) => {
    console.log("selectThisStore e:", e.target);
    setSearchStore(e.target.innerText);
    setFoundStore(true);
  };

  const lists =
    ifTypedWords && searchedStores.length == 0 ? (
      <p>Oops, no such store</p>
    ) : (
      searchedStores.map((store, index) => (
        <p key={index} onClick={selectThisStore}>
          {store.storeName}
        </p>
      ))
    );

  const stores = ifTypedWords && !foundStore ? lists : <></>;

  return <div className="searchSuggestionList">{stores}</div>;
}

export default SearchSuggestionList;
