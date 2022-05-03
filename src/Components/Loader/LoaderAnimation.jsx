import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const LoaderAnimation = () => {
  const color = "orange";
  return(
    <div className="loader">
        <h1 className="loader__heading">wilderness alternative expedia</h1>
        <div className="loader__box">
            <ClimbingBoxLoader color={color}  size={25} />
        </div>
        <p className="loader__sub-heading">taking you places you've never been before</p>
  </div>
  )
};

export default LoaderAnimation;
