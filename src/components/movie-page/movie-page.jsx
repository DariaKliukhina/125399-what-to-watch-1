import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {compose} from "redux";
import {withRouter} from "react-router";
import {Route} from "react-router-dom";
import UserBlock from "../user-block/user-block.jsx";
import FilmsList from "../films-list/films-list.jsx";
import Overview from "../overview/overview.jsx";
import Details from "../details/details.jsx";
import Reviews from "../reviews/reviews.jsx";
import MovieNavigation from "../movie-navigation/movie-navigation.jsx";
import withPlayer from "../hocs/with-player/with-player.jsx";

const MAXIMUM_RECOMMENDED_FILMS_NUMBER = 4;

class MoviePage extends PureComponent {
  constructor(props) {
    super(props);

    this._handelHomeLinkClick = this._handelHomeLinkClick.bind(this);
    this._formRecommendedBlock = this._formRecommendedBlock.bind(this);
    this._handlePlayClick = this._handlePlayClick.bind(this);
    this._handelFavoriteClick = this._handelFavoriteClick.bind(this);
  }

  _handlePlayClick() {
    const {togglePlayer} = this.props;

    togglePlayer();
  }

  _handelFavoriteClick() {
    const {addFilmToFavorite, activeFilm, authorized, history} = this.props;

    if (authorized) {
      addFilmToFavorite(activeFilm.id, activeFilm.favorite ? 0 : 1);
    } else {
      history.push(`/login`);
    }
  }

  _handelHomeLinkClick() {
    const {homeRedirect} = this.props;

    homeRedirect();
  }

  _formRecommendedBlock(recommendedFilms) {
    const {setActiveFilm, changeGenre} = this.props;
    if (recommendedFilms.length) {
      return (
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList
            films={recommendedFilms}
            changeGenre={changeGenre}
            setActiveFilm={setActiveFilm}
          />
        </section>
      );
    }

    return null;
  }
  render() {
    const {activeFilm, visibleFilms, match} = this.props;
    const recommendedFilms =
      visibleFilms.length > MAXIMUM_RECOMMENDED_FILMS_NUMBER
        ? visibleFilms.slice(0, MAXIMUM_RECOMMENDED_FILMS_NUMBER)
        : visibleFilms;

    return (
      <>
      <div className="visually-hidden">
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="add" viewBox="0 0 19 20">
            <title>+</title>
            <desc>Created with Sketch.</desc>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <polygon
                id="+"
                fill="#EEE5B5"
                points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"
              />
            </g>
          </symbol>
          <symbol id="full-screen" viewBox="0 0 27 27">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z"
              fill="#FFF9D9"
              fillOpacity="0.7"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z"
              fill="#FFF9D9"
              fillOpacity="0.7"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z"
              fill="#FFF9D9"
              fillOpacity="0.7"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z"
              fill="#FFF9D9"
              fillOpacity="0.7"
            />
          </symbol>
          <symbol id="in-list" viewBox="0 0 18 14">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z"
              fill="#EEE5B5"
            />
          </symbol>
          <symbol id="pause" viewBox="0 0 14 21">
            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g
              id="Artboard"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <polygon
                id="Line"
                fill="#EEE5B5"
                fillRule="nonzero"
                points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"
              />
              <polygon
                id="Line"
                fill="#EEE5B5"
                fillRule="nonzero"
                points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"
              />
            </g>
          </symbol>
          <symbol id="play-s" viewBox="0 0 19 19">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0L19 9.5L0 19V0Z"
              fill="#EEE5B5"
            />
          </symbol>
        </svg>
      </div>

      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={activeFilm.backgroundImage} alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a className="logo__link" onClick={this._handelHomeLinkClick}>
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <UserBlock />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{activeFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{activeFilm.genre}</span>
                <span className="movie-card__year">{activeFilm.release}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                  onClick={this._handelFavoriteClick}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={activeFilm.posterImage}
                alt={activeFilm.name}
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">

              <MovieNavigation activeItem={`overview`} />

              <Route
                path={match.url}
                exact
                render={() => <Overview activeFilm={activeFilm} />}
              />
              <Route
                path={match.url + `/overview`}
                render={() => <Overview activeFilm={activeFilm} />}
              />

              <Route
                path={match.url + `/details`}
                render={() => <Details activeFilm={activeFilm} />}
              />

              <Route
                path={match.url + `/Reviews`}
                render={() => <Reviews activeFilmId={activeFilm.id}/>}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        {this._formRecommendedBlock(recommendedFilms)}

        <footer className="page-footer">
          <div className="logo">
            <a onClick={this._handelHomeLinkClick} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
      </>
    );
  }
}

MoviePage.propTypes = {
  visibleFilms: PropTypes.array.isRequired,
  homeRedirect: PropTypes.func.isRequired,
  setActiveFilm: PropTypes.func.isRequired,
  changeGenre: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  togglePlayer: PropTypes.func.isRequired,
  addFilmToFavorite: PropTypes.func.isRequired,
  authorized: PropTypes.bool.isRequired,
  activeFilm: PropTypes.shape({
    posterImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    scoresCount: PropTypes.number.isRequired,
    starring: PropTypes.array
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export {MoviePage};

export default compose(
    withPlayer,
    withRouter
)(MoviePage);
