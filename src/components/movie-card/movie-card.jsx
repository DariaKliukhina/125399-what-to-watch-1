import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router";
import {compose} from "redux";
import VideoPlayer from '../video-player/video-player.jsx';

const SIZES = {
  width: 280,
  height: 175
};

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this._handelMouseEnter = this._handelMouseEnter.bind(this);
    this._handelMouseLeave = this._handelMouseLeave.bind(this);
    this._handelLinkClick = this._handelLinkClick.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const {title, poster, preview, id} = this.props;
    const {width, height} = SIZES;

    return (<article
      ref={this._filmCardRef}
      className="small-movie-card catalog__movies-card"
      onMouseEnter={this._handelMouseEnter}
      onMouseLeave={this._handelMouseLeave}
      onClick={this._handelLinkClick}>
      <div className="small-movie-card__image">
        <VideoPlayer
          options={
            {
              width,
              height,
            }
          }
          preview={preview}
          poster={poster}
          muted={true}
          ref={this._videoRef}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" params={{id}} href="#"
          onClick={(evt) => {
            evt.preventDefault();
          }}>{title}</a>
      </h3>
    </article>);
  }

  _handelLinkClick() {
    const {changeGenre, setActiveFilm, genre, id} = this.props;
    changeGenre(genre);
    setActiveFilm(id);
    this.props.history.push(`/film/${id}`);
  }

  _handelMouseEnter() {

    this.timer = setTimeout(
        function () {
          this._videoRef.current.video.current.play();
        }.bind(this),
        1000
    );
  }

  _handelMouseLeave() {
    if (this.timer) {
      clearTimeout(this.timer);
      this._videoRef.current.video.current.load();
    }
  }
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  changeGenre: PropTypes.func,
  setActiveFilm: PropTypes.func,
  genre: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export {MovieCard};

export default compose(withRouter)(MovieCard);
