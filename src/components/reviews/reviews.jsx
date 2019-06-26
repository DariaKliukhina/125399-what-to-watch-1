import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";

import {Operation, actionClearReviews} from "../../reducer/reviews/reviews.js";

class Reviews extends PureComponent {
  constructor(props) {
    super(props);

    this._formDate = this._formDate.bind(this);
  }

  componentDidMount() {
    const {loadReviews, activeFilmId} = this.props;

    loadReviews(activeFilmId);
  }

  componentWillUnmount() {
    const {clearReviews} = this.props;

    clearReviews();
  }

  _formDate(dateStamp) {
    const date = new Date(dateStamp);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${month} ${day}, ${year}.`;
  }

  render() {
    const {reviews} = this.props;

    return (
      <>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {reviews.map((review, index) => {
            if (!(index % 2)) {
              return (
                <div className="review" key={`${index}${review.user.name}`}>
                  <blockquote className="review__quote">
                    <p className="review__text">{review.comment}</p>

                    <footer className="review__details">
                      <cite className="review__author">
                        {review.user.name}
                      </cite>
                      <time className="review__date" dateTime={review.date}>
                        {this._formDate(review.date)}
                      </time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{review.rating}</div>
                </div>
              );
            }

            return null;
          })}
        </div>
        <div className="movie-card__reviews-col">
          {reviews.map((review, index) => {
            if (index % 2) {
              return (
                <div className="review" key={`${index}${review.user.name}`}>
                  <blockquote className="review__quote">
                    <p className="review__text">{review.comment}</p>

                    <footer className="review__details">
                      <cite className="review__author">
                        {review.user.name}
                      </cite>
                      <time className="review__date" dateTime={review.date}>
                        {this._formDate(review.date)}
                      </time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{review.rating}</div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      </>
    );
  }
}
Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  loadReviews: PropTypes.func.isRequired,
  activeFilmId: PropTypes.number.isRequired,
  clearReviews: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  reviews: state.reviews.reviews
});
const mapDispatchToProps = (dispatch) => ({
  loadReviews: (filmId) => {
    dispatch(Operation.loadReviews(filmId));
  },
  clearReviews: () => {
    dispatch(actionClearReviews());
  }
});
export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Reviews);
