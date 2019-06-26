import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class Overview extends PureComponent {
  constructor(props) {
    super(props);

    this._formTextRating = this._formTextRating.bind(this);
  }

  _formTextRating(numberRating) {
    if (numberRating >= 0 && numberRating < 3) {
      return `bad`;
    }

    if (numberRating >= 3 && numberRating <= 5) {
      return `normal`;
    }

    if (numberRating >= 5 && numberRating < 8) {
      return `good`;
    }

    if (numberRating >= 8 && numberRating < 10) {
      return `very good`;
    }

    return `awesome`;
  }

  render() {
    const {film} = this.props;

    return (
      <>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">
            {this._formTextRating(film.rating)}
          </span>
          <span className="movie-rating__count">
            {film.scoresCount} ratings
          </span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.description}</p>

        <p className="movie-card__director">
          <strong>{film.director}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>{film.starring.join(`, `)}</strong>
        </p>
      </div>
      </>
    );
  }
}

Overview.propTypes = {
  film: PropTypes.object.isRequired,
};

export default Overview;
