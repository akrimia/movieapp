import React from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import { connect } from "react-redux";
import Rating from "./rating";
function SearchApp({ rate, HandelInputSearch }) {
  return (
    <div>
      <div className="InputGroup">
        <InputGroup>
          <Input
            placeholder="Type movie name to search"
            onChange={event => HandelInputSearch(event.target.value)}
          />
          <InputGroupAddon addonType="append">
            <Button color="secondary">Search</Button>
          </InputGroupAddon>
          <Rating nbrerate={rate} />
        </InputGroup>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  rate: state.rate
});

const mapDispatchToProps = dispatch => {
  return {
    HandelInputSearch: newText => {
      dispatch({
        type: "SET_TITLE_FILTER",
        title: newText
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchApp);
