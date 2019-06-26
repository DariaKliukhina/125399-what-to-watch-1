import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class Details extends PureComponent {
  constructor(props) {
    super(props);

    this._formTime = this._formTime.bind(this);
  }

  _formTime(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes - hours * 60;

    if (hours && minutes) {
      return `${hours}h ${minutes}m`;
    }

    return `${minutes}m`;
  }

  render() {
    const {activeFilm} = this.props;

    return (
      <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{activeFilm.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {activeFilm.starring}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value"> {this._formTime(activeFilm.runTime)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{activeFilm.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{activeFilm.released}</span>
          </p>
        </div>
      </div>
      </>
    );
  }
}

Details.propTypes = {
  activeFilm: PropTypes.object.isRequired
};

export default Details;
