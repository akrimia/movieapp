import React from "react";
import { Card, CardImg, CardTitle, CardColumns, CardBody } from "reactstrap";
import { connect } from "react-redux";
import Rating from "./rating";

function ViewApp({ rate, search, movies }) {
  return (
    <CardColumns>
      {movies
        .filter(
          el =>
            el.title.toLowerCase().includes(search.toLowerCase()) &&
            el.rate >= rate
        )
        .map(el => (
          <Card>
            <CardImg top width="100%" src={el.img} alt={el.title} />
            <CardBody>
              <CardTitle>{el.title}</CardTitle>
              <Rating nbrerate={el.rate} />
            </CardBody>
          </Card>
        ))}
    </CardColumns>
  );
}

const mapStateToProps = state => ({
  movies: state.card,
  search: state.search,
  rate: state.rate
});

export default connect(mapStateToProps)(ViewApp);
