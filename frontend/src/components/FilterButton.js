import React, { useState } from "react";
// import { Button } from "react-bootstrap";

function FilterButton({ name, index, handleSelectedDrinkTypes }) {
  const [isClicked, setIsClicked] = useState(false);
  let active = isClicked ? "filterBtnClicked" : "";

  const handleClick = (e) => {
    handleSelectedDrinkTypes();
    setIsClicked(!isClicked);
    // console.log("handleClick e", e.target);
  };

  return (
    <button
      className={`filterButton button${index} ${active}`}
      onClick={handleClick}
      name={name}
    >
      {name}
    </button>
  );
}

export default FilterButton;
