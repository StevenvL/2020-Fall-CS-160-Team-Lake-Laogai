import React from "react";
import RatingStarOff from "./RatingStarOff";
import RatingStarOn from "./RatingStarOn";
import "../styling.css"

function StoreRatings({ ratings }) {
  let whiteStars = [];
  for (let i = 0; i < 5; i++) {
    whiteStars.push(i);
  }
  let yellowStars = whiteStars.splice(0, ratings);
  let defaultRating = whiteStars.map((num, index) => {
    return <RatingStarOff key={index} />;
  });
  let yellowRating = yellowStars.map((num, index) => {
    return <RatingStarOn key={index} />;
  });
  return (
    <>
      {yellowRating}
      {defaultRating}
    </>
  );
}

export default StoreRatings;
