import React, { useState } from "react";
// import { Button } from "react-bootstrap";

function FilterButton({ name, index }) {
  const [isClicked, setIsClicked] = useState(false);
  let active = isClicked ? "filterBtnClicked" : "";

  return (
    <button
      className={`filterButton button${index} ${active}`}
      onClick={() => setIsClicked(!isClicked)}
      name={name}
    >
      {name}
    </button>
  );
}

export default FilterButton;
