import React from 'react';
import PropTypes from 'prop-types';
import genres from "../../mocks/genres.js";
import withActiveItem from "../hocs/withActiveItem/withActiveItem.jsx";

const GenreList = (props) => {
  const {activeItem: activeGenre, changeActiveItem: handelGenreClick} = props;
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
              handelGenreClick(genre);
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
  activeItem: PropTypes.string.isRequired,
  changeActiveItem: PropTypes.func.isRequired
};

export default withActiveItem(GenreList);
