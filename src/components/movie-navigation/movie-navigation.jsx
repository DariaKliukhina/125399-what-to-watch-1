import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router";
import {compose} from "redux";

import withActiveItem from "../hocs/with-active-item/with-active-item.jsx";

class MovieNavigation extends PureComponent {
  constructor(props) {
    super(props);

    this._handelLinkClick = this._handelLinkClick.bind(this);
  }

  _handelLinkClick(tab) {
    const {match, history, changeActiveItem} = this.props;
    changeActiveItem(tab);
    history.push(`${match.url}/${tab}`);
  }

  render() {
    const {activeItem} = this.props;
    return (
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li
            className={`movie-nav__item ${
              activeItem === `overview` ? `movie-nav__item--active` : ``
            }`}
          >
            <a
              onClick={() => {
                this._handelLinkClick(`overview`);
              }}
              className="movie-nav__link"
            >
              Overview
            </a>
          </li>
          <li
            className={`movie-nav__item ${
              activeItem === `details` ? `movie-nav__item--active` : ``
            }`}
          >
            <a
              onClick={() => {
                this._handelLinkClick(`details`);
              }}
              className="movie-nav__link"
            >
              Details
            </a>
          </li>
          <li
            className={`movie-nav__item ${
              activeItem === `reviews` ? `movie-nav__item--active` : ``
            }`}
          >
            <a
              onClick={() => {
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
  activeItem: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  changeActiveItem: PropTypes.func.isRequired,
};

export default compose(
    withActiveItem,
    withRouter
)(MovieNavigation);
