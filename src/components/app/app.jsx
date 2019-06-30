import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Switch, Route} from "react-router-dom";
import {withRouter} from "react-router";
import {compose} from "redux";
import {ActionCreator, Operation} from "../../reducer/data/data";

import MainScreen from '../main-screen/main-screen.jsx';
import SignIn from "../sign-in/signIn.jsx";
import Favorites from "../favorites/favorites.jsx";
import ReviewPage from "../review-page/review-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.onHomeRedirect = this.onHomeRedirect.bind(this);
  }

  onHomeRedirect() {
    const {onActiveFilmSet, onGenreChange, history} = this.props;

    onActiveFilmSet();
    onGenreChange();
    history.push(`/`);
  }

  render() {
    const {
      authorized,
      films,
      visibleFilms,
      genres,
      activeGenre,
      onGenreChange,
      onShowMoreClick,
      activeFilm,
      onActiveFilmSet,
      onAddFilmToFavorite
    } = this.props;

    const mainProps = {
      authorized,
      films,
      visibleFilms,
      genres,
      activeGenre,
      onGenreChange,
      onShowMoreClick,
      activeFilm,
      onActiveFilmSet,
      onAddFilmToFavorite
    };

    const favoritesProps = {
      authorized,
      onHomeRedirect: this.onHomeRedirect,
      onGenreChange,
      onActiveFilmSet
    };

    const filmProps = {
      authorized,
      visibleFilms,
      activeFilm,
      onActiveFilmSet,
      onGenreChange,
      onHomeRedirect: this.onHomeRedirect,
      onAddFilmToFavorite
    };

    const reviewProps = {
      authorized,
      activeFilm,
      onHomeRedirect: this.onHomeRedirect
    };

    return (
      <Switch>
        <Route path="/" exact render={() => <MainScreen {...mainProps} />}/>
        <Route
          path="/login"
          render={() => <SignIn onHomeRedirect={this.onHomeRedirect}/>}
        />
        <Route
          path="/favorites"
          render={() => <Favorites {...favoritesProps} />}
        />
        <Route
          path="/films/:id/review"
          render={() => <ReviewPage {...reviewProps} />}
        />
        <Route path="/film/:id" render={() => <MoviePage {...filmProps} />}/>
      </Switch>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
  authorized: PropTypes.bool.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        backgroundImage: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        released: PropTypes.number.isRequired,
        runTime: PropTypes.number.isRequired,
        scoresCount: PropTypes.number.isRequired,
        starring: PropTypes.array.isRequired,
        videoLink: PropTypes.string.isRequired
      })
  ).isRequired,
  genres: PropTypes.array.isRequired,
  activeGenre: PropTypes.string.isRequired,
  activeFilm: PropTypes.shape({
    description: PropTypes.string,
    director: PropTypes.string,
    genre: PropTypes.string,
    id: PropTypes.number,
    isFavorite: PropTypes.bool,
    name: PropTypes.string,
    poster: PropTypes.string,
    posterImage: PropTypes.string,
    preview: PropTypes.string,
    rating: PropTypes.number,
    released: PropTypes.number,
    runTime: PropTypes.number,
    scoresCount: PropTypes.number,
    starring: PropTypes.arrayOf(PropTypes.string),
    videoLink: PropTypes.string
  }).isRequired,
  visibleFilms: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired
      })
  ).isRequired,
  onGenreChange: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  onActiveFilmSet: PropTypes.func.isRequired,
  onAddFilmToFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    activeGenre: state.data.activeGenre,
    films: state.data.films,
    activeFilm: state.data.activeFilm,
    visibleFilms: state.data.visibleFilms,
    genres: state.data.genres,
    authorized: state.user.authorized,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGenreChange: (newGenre = `All genres`) => {
    dispatch(ActionCreator.changeGenre(newGenre));
    if (newGenre === `All genres`) {
      dispatch(ActionCreator.showAllFilms());
    } else {
      dispatch(ActionCreator.changeFilms());
    }
    dispatch(ActionCreator.clearVisibleFilms());
    dispatch(ActionCreator.formVisibleFilms());
  },
  onShowMoreClick: () => {
    dispatch(ActionCreator.formVisibleFilms());
  },
  onActiveFilmSet: (filmId = null) => {
    dispatch(ActionCreator.changeActiveFilm(filmId));
    dispatch(ActionCreator.clearVisibleFilms());
    dispatch(ActionCreator.formVisibleFilms(filmId));
  },
  onAddFilmToFavorite: (filmId, filmStatus) => {
    dispatch(Operation.addFilmToFavourite(filmId, filmStatus));
  }
});


export {App};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRouter
)(App);
