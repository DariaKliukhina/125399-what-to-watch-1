import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router";

const Tab = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

class MovieNavigation extends PureComponent {
  constructor(props) {
    super(props);

    this._handelLinkClick = this._handelLinkClick.bind(this);
    this._setActiveTab = this._setActiveTab.bind(this);
  }

  _handelLinkClick(tab) {
    const {match, history} = this.props;
    history.push(`${match.url}/${tab}`);
  }

  _setActiveTab(path) {
    if (path.indexOf(Tab.OVERVIEW) > -1) {
      return Tab.OVERVIEW;
    }

    if (path.indexOf(Tab.DETAILS) > -1) {
      return Tab.DETAILS;
    }

    if (path.indexOf(Tab.REVIEWS) > -1) {
      return Tab.REVIEWS;
    }

    return Tab.OVERVIEW;
  }

  render() {
    const {history} = this.props;
    const activeTab = this._setActiveTab(history.location.pathname.split(`/`));
    return (
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li
            className={`movie-nav__item ${
              activeTab === Tab.OVERVIEW ? `movie-nav__item--active` : ``
            }`}
          >
            <a
              href="#"
              onClick={(evt) => {
                evt.preventDefault();
                this._handelLinkClick(`overview`);
              }}
              className="movie-nav__link"
            >
              Overview
            </a>
          </li>
          <li
            className={`movie-nav__item ${
              activeTab === Tab.DETAILS ? `movie-nav__item--active` : ``
            }`}
          >
            <a
              href="#"
              onClick={(evt) => {
                evt.preventDefault();
                this._handelLinkClick(`details`);
              }}
              className="movie-nav__link"
            >
              Details
            </a>
          </li>
          <li
            className={`movie-nav__item ${
              activeTab === Tab.REVIEWS ? `movie-nav__item--active` : ``
            }`}
          >
            <a
              href="#"
              onClick={(evt) => {
                evt.preventDefault();
                this._handelLinkClick(`reviews`);
              }}
              className="movie-nav__link"
            >
              Reviews
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

MovieNavigation.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(MovieNavigation);
