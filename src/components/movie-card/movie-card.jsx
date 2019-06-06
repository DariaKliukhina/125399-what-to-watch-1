import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import withVideo from "../hocs/withVideo/withVideo.jsx";
import VideoPlayer from '../video-player/video-player.jsx';

const SIZES = {
  width: 280,
  height: 175
};

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      timerId: null,
      isPreviewPlaying: false,
    };


    this._mouseEnterHandler = this._mouseEnterHandler.bind(this);
    this._mouseLeaveHandler = this._mouseLeaveHandler.bind(this);
  }

  render() {
    const {film, onGenreClick} = this.props;
    const {name, preview, poster} = film;
    const {isPreviewPlaying} = this.state;
    const {width, height} = SIZES;

    return (<article
      ref={this._filmCardRef}
      className="small-movie-card catalog__movies-card"
      onMouseEnter={this._mouseEnterHandler}
      onMouseLeave={this._mouseLeaveHandler}>
      <div className="small-movie-card__image">
        <VideoPlayer
          options={
            {
              width,
              height,
            }
          }
          videoSrc={preview}
          posterSrc={poster}
          muted={true}
          isPlaying={isPreviewPlaying}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={onGenreClick}>{name}</a>
      </h3>
    </article>);
  }

  _mouseEnterHandler() {
    this._timer = setTimeout(() => {
      this.setState({isPreviewPlaying: true});
    }, 1000);
  }

  _mouseLeaveHandler() {
    clearTimeout(this._timer);
    this.setState({isPreviewPlaying: false});
  }
}

MovieCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired,
  onGenreClick: PropTypes.func,
  onHover: PropTypes.func,
};

export default withVideo(MovieCard);
