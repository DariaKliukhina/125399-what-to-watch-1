import React from 'react';
import PropTypes from 'prop-types';
import withActiveItem from "../hocs/withActiveItem/withActiveItem.jsx";
import MovieCard from '../movie-card/movie-card.jsx';

const FilmsList = ({films, onGenreClick}) => {
  const itemList = films.map((item, index) => {
    return <MovieCard
      film={item}
      key={index}
      onGenreClick = {onGenreClick}
    />;
  });

  return <div className="catalog__movies-list">
    {itemList}
  </div>;
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  })).isRequired,
  onGenreClick: PropTypes.func,
};

export default withActiveItem(FilmsList);
