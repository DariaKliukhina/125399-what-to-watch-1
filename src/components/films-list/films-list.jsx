import React from 'react';
import PropTypes from 'prop-types';
import withActiveItem from "../hocs/withActiveItem/withActiveItem.jsx";
import MovieCard from '../movie-card/movie-card.jsx';

const FilmsList = ({films, onGenreClick}) => {
  const itemList = films.map((item) => {
    return <MovieCard
      film={item}
      key={item.picture}
      onGenreClick = {onGenreClick}
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
  onGenreClick: PropTypes.func,
};

export default withActiveItem(FilmsList);
