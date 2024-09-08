import { Rating } from "@mui/material";
import React from "react";

function Ratings(props) {
  return (
    <div>
      <Rating name="read-only" value={props.stars} readOnly />
    </div>
  );
}

export default Ratings;
