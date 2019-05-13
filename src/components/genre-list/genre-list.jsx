import React from 'react';
import PropTypes from 'prop-types';

const GenreList = (props) => {
  const {genre} = props;

  return (
    <li className="catalog__genres-item">
      <a href="#" className="catalog__genres-link">
        {genre}
      </a>
    </li>
  );
};

GenreList.propTypes = {
  genre: PropTypes.oneOf([
    `Comedies`,
    `Crime`,
    `Documentary`,
    `Dramas`,
    `Horror`,
    `Kids & Family`,
    `Romance`,
    `Sci-Fi`,
    `Thrillers`]).isRequired
};

export default GenreList;
