import React from 'react';
import PropTypes from 'prop-types';
import withActiveItem from "../hocs/withActiveItem/withActiveItem.jsx";
import MovieCard from '../movie-card/movie-card.jsx';

const FilmsList = (props) => {
  const {
    films,
    changeActiveItem: handelActiveCardChange,
    changeGenre,
    setActiveFilm
  } = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => (
        <MovieCard
          key={`${film.id}${film.name}`}
          id={film.id}
          title={film.name}
          poster={film.poster}
          genre={film.genre}
          preview={film.preview}
          onCardEnter={handelActiveCardChange}
          changeGenre={changeGenre}
          setActiveFilm={setActiveFilm}
        />
      ))}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  })).isRequired,
  changeActiveItem: PropTypes.func,
  changeGenre: PropTypes.func,
  setActiveFilm: PropTypes.func
};

export {FilmsList};

export default withActiveItem(FilmsList);
