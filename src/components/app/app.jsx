import React from 'react';
import MainScreen from '../main-screen/main-screen.jsx';
import PropTypes from "prop-types";

const App = (props) => {
  const {films, genres} = props;

  const emptyClick = () => {};

  return <MainScreen
    films={films}
    genres={genres}
    onClick={emptyClick}
  />;
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired
};

export default App;
