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
    const {title, picture, preview} = film;
    const {isPreviewPlaying} = this.state;
    const {width, height} = SIZES;

    return (<article
      ref={this._filmCardRef}
      className="small-movie-card catalog__movies-card"
      onMouseEnter={this._mouseEnterHandler}
      onMouseLeave={this._mouseLeaveHandler}>
      <div className="small-movie-card__image">
        <VideoPlayer
          videoSrc={preview}
          posterSrc={`img/` + picture.toLowerCase()}
          options={
            {
              width,
              height,
            }
          }
          isPlaying={isPreviewPlaying}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={onGenreClick}>{title}</a>
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
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
  onGenreClick: PropTypes.func,
  onHover: PropTypes.func,
};

export default withVideo(MovieCard);
