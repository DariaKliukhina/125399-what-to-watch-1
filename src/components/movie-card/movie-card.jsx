import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({film, onClick, onHover}) => {
  const {
    title,
    picture
  } = film;

  return <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onHover(film)}>
    <button className="small-movie-card__play-btn" type="button" onClick={() => onClick(film)}>Play</button>
    <div className="small-movie-card__image">
      <img src={`img/` + picture.toLowerCase()}
        alt={title} width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html" onClick={() => onClick(film)}>{title}</a>
    </h3>
  </article>;
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
};

export default MovieCard;
