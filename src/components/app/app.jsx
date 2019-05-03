import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen.jsx';

const App = (props) => {
  const {filmsList} = props;

  return <MainScreen filmsList={filmsList}/>;
};

App.propTypes = {
  filmsList: PropTypes.array
};

export default App;
