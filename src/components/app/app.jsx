import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen.jsx';

const App = () => {
  const filmsList = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`];
  const emptyClick = (evt) => {
    evt.preventDefault();
  };
  return <MainScreen
    filmsList={filmsList}
    onClick = {emptyClick}/>;
};

App.propTypes = {
  filmsList: PropTypes.array,
  emptyClick: PropTypes.func
};

export default App;
