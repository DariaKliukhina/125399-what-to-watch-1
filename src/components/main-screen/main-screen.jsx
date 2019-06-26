import React, {PureComponent} from 'react';
import UserBlock from "../userBlock/user-block.jsx";
import withPlayer from "../hocs/withPlayer/with-player.jsx";
import {withRouter} from "react-router";
import {compose} from "redux";
import PropTypes from 'prop-types';
import GenreList from "../genre-list/genre-list.jsx";
import FilmsList from "../films-list/films-list.jsx";

class MainScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedFilm: {
        title: ``,
        picture: ``,
      }
    };

    this._handlePlayClick = this._handlePlayClick.bind(this);
    this._displayShowMore = this._displayShowMore.bind(this);
    this._handelShowMoreClick = this._handelShowMoreClick.bind(this);
  }

  _handlePlayClick() {
    const {togglePlayer} = this.props;

    togglePlayer();
  }

  _displayShowMore() {
    const {films, visibleFilms} = this.props;
    if (films.length > visibleFilms.length) {
      return (
        <div className="catalog__more">
          <button
            className="catalog__button"
            type="button"
            onClick={this._handelShowMoreClick}
          >
            Show more
          </button>
        </div>
      );
    } else {
      return null;
    }
  }
  _handelShowMoreClick() {
    const {onShowMoreClick} = this.props;
    onShowMoreClick();
  }

  render() {
    const {
      visibleFilms,
      genres,
      activeGenre,
      changeGenre,
      setActiveFilm,
      activeFilm
    } = this.props;

    return (
      <React.Fragment>
        <div className="visually-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <symbol id="add" viewBox="0 0 19 20">
              <title>+</title>
              <desc>Created with Sketch.</desc>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon id="+" fill="#EEE5B5"
                  points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"/>
              </g>
            </symbol>
            <symbol id="full-screen" viewBox="0 0 27 27">
              <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z"
                fill="#FFF9D9" fillOpacity="0.7"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z"
                fill="#FFF9D9" fillOpacity="0.7"/>
              <path fillRule="evenodd" clipRule="evenodd"
                d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9"
                fillOpacity="0.7"/>
              <path fillRule="evenodd" clipRule="evenodd"
                d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
            </symbol>
            <symbol id="in-list" viewBox="0 0 18 14">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z"
                fill="#EEE5B5"/>
            </symbol>
            <symbol id="pause" viewBox="0 0 14 21">
              <title>Artboard</title>
              <desc>Created with Sketch.</desc>
              <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"/>
                <polygon id="Line" fill="#EEE5B5" fillRule="nonzero"
                  points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"/>
              </g>
            </symbol>
            <symbol id="play-s" viewBox="0 0 19 19">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
            </symbol>
          </svg>
        </div>

        <section
          className = "movie-card" >
          <div
            className = "movie-card__bg" >
            <img
              src="img/bg-the-grand-budapest-hotel.jpg"
              alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header
            className = "page-header movie-card__head">
            <div
              className = "logo" >
              <a className = "logo__link" >
                <span className = "logo__letter logo__letter--1">
              W
                </span>
                <span className="logo__letter logo__letter--2">
              T
                </span>
                <span className = "logo__letter logo__letter--3" >
              W
                </span>
              </a>
            </div>
            <UserBlock />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src={activeFilm.posterImage}
                  alt={activeFilm.name}
                  width="218"
                  height="327"/>
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">{activeFilm.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{activeFilm.genre}</span>
                  <span className="movie-card__year">{activeFilm.released}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button" onClick={this._handlePlayClick}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <GenreList
              genres={genres}
              activeItem={activeGenre}
              onGenreClick={changeGenre} />

            <FilmsList
              films={visibleFilms}
              changeGenre={changeGenre}
              setActiveFilm={setActiveFilm}
            />

            {this._displayShowMore()}
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a className="logo__link logo__link--light">
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
      </React.Fragment>
    );
  }
}

MainScreen.propTypes = {
  activeFilm: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  })).isRequired,
  genres: PropTypes.array.isRequired,
  changeGenre: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  setActiveFilm: PropTypes.func.isRequired,
  visibleFilms: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired
      })
  ).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  activeGenre: PropTypes.string.isRequired,
  togglePlayer: PropTypes.func.isRequired,
};

export default compose(
    withRouter,
    withPlayer
)(MainScreen);
