import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import MainScreen from '../main-screen/main-screen.jsx';
import {actionChangeGenre, actionChangeFilms} from "../../reducer";

const App = (props) => {
  const {films, genres, activeGenre, onGenreClick} = props;

  return <MainScreen
    films={films}
    genres={genres}
    activeGenre={activeGenre}
    onGenreClick={onGenreClick}
  />;
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeGenre: state.activeGenre,
  films: state.films
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick: (newGenre) => {
    dispatch(actionChangeGenre(newGenre));
    dispatch(actionChangeFilms(newGenre));
  }
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
