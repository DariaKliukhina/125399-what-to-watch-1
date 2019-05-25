import React from 'react';
import PropTypes from 'prop-types';
import genres from "../../mocks/genres.js";

const GenreList = (props) => {
  const {activeGenre, onGenreClick} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => (
        <li
          key={index}
          className={`catalog__genres-item ${
            genre === activeGenre ? `catalog__genres-item--active` : ``
          }`}
        >
          <a
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
              onGenreClick(genre);
            }}
            className="catalog__genres-link"
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};

GenreList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired
};

export default GenreList;
