import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card.jsx';

const FilmsList = ({films, onClick, onHover}) => {
  const itemList = films.map((item) => {
    return <MovieCard
      film={item}
      key={item.picture}
      onClick={onClick}
      onHover={onHover}
    />;
  });

  return <div className="catalog__movies-list">
    {itemList}
  </div>;
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
};

export default FilmsList;
