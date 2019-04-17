import React from "react";
import { connect } from "react-redux";

function Rating({ rate, minrate, nbrerate }) {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    if (i < nbrerate) arr.push(<span onClick={() => minrate(i + 1)}>★</span>);
    else {
      arr.push(<span onClick={() => minrate(i + 1)}>☆</span>);
    }
  }
  return <span>{arr}</span>;
}

const mapDispatchToProps = dispatch => {
  return {
    minrate: newRate => {
      dispatch({
        type: "SET_RATE_FILTER",
        rate: newRate
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Rating);
