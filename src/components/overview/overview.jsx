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
    const {activeFilm} = this.props;

    return (
      <>
      <div className="movie-rating">
        <div className="movie-rating__score">{activeFilm.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">
            {this._formTextRating(activeFilm.rating)}
          </span>
          <span className="movie-rating__count">
            {activeFilm.scoresCount} ratings
          </span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{activeFilm.description}</p>

        <p className="movie-card__director">
          <strong>{activeFilm.director}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>{activeFilm.starring.join(`, `)}</strong>
        </p>
      </div>
      </>
    );
  }
}

Overview.propTypes = {
  activeFilm: PropTypes.object.isRequired,
};

export default Overview;
