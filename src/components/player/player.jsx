import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import withFilmDuration from "../../hocs/with-film-duration/with-film-duration.jsx";

class Player extends PureComponent {
  constructor(props) {
    super(props);
    this.video = React.createRef();
    this.progressBar = React.createRef();
    this.toggler = React.createRef();

    this._handleExitClick = this._handleExitClick.bind(this);
    this._handelPlayClick = this._handelPlayClick.bind(this);
    this._changeFilmProgress = this._changeFilmProgress.bind(this);
    this._handelFullScreenClick = this._handelFullScreenClick.bind(this);
  }

  _handelFullScreenClick() {
    if (this.video.current.requestFullscreen) {
      this.video.current.requestFullscreen();
    } else if (this.video.current.mozRequestFullScreen) {
      this.video.current.mozRequestFullScreen();
    } else if (this.video.current.webkitRequestFullscreen) {
      this.video.current.webkitRequestFullscreen();
    } else if (this.video.current.msRequestFullscreen) {
      this.video.current.msRequestFullscreen();
    }
  }

  _handleExitClick() {
    const {onPlayerToggle} = this.props;

    onPlayerToggle();
  }

  _handelPlayClick() {
    if (this.video.current.paused) {
      this.video.current.play();
    } else {
      this.video.current.pause();
    }
  }

  _calculateFilmDuration(video) {
    if (video) {
      const {onFilmDurationUpdate} = this.props;
      let time = video.duration;
      const hours = Math.floor(time / 3600);
      time = time - hours * 3600;
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time - minutes * 60);
      onFilmDurationUpdate(hours, minutes, seconds);
    }
  }

  _changeFilmProgress(video, progressBar, toggler) {
    if (video) {
      const {onFilmDurationUpdate} = this.props;
      const videoProgress = (video.currentTime / video.duration) * 100;

      progressBar.value = videoProgress;
      toggler.style.left = `${videoProgress}%`;

      let timeLeft = video.duration - video.currentTime;
      const hours = Math.floor(timeLeft / 3600);
      timeLeft = timeLeft - hours * 3600;
      const minutes = Math.floor(timeLeft / 60);
      const seconds = Math.floor(timeLeft - minutes * 60);

      onFilmDurationUpdate(hours, minutes, seconds);
    }
  }

  componentDidMount() {
    if (this.video.current) {
      this.video.current.addEventListener(`canplay`, () => {
        this._calculateFilmDuration(this.video.current);
      });
      this.video.current.addEventListener(`canplay`, () => {
        this.video.current.play();
      });
      this.video.current.addEventListener(`timeupdate`, () => {
        this._changeFilmProgress(
            this.video.current,
            this.progressBar.current,
            this.toggler.current
        );
      });
    }
  }

  componentWillUnmount() {
    this.video.current.removeEventListener(
        `canplay`,
        this._calculateFilmDuration
    );
    this.video.current.removeEventListener(
        `timeupdate`,
        this._changeFilmProgress
    );
  }

  render() {
    const {activeFilm, filmDuration} = this.props;

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

      <div className="player">
        <video
          ref={this.video}
          src={activeFilm.videoLink}
          className="player__video"
          poster={activeFilm.poster}
        />

        <button
          type="button"
          className="player__exit"
          onClick={this._handleExitClick}
        >
          Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                className="player__progress"
                ref={this.progressBar}
                max="100"
              />
              <div className="player__toggler" ref={this.toggler}>
                Toggler
              </div>
            </div>
            <div className="player__time-value">{`${ filmDuration.hours } : ${ filmDuration.minutes } : ${ filmDuration.seconds }`}</div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={this._handelPlayClick}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{activeFilm.name}</div>

            <button type="button" className="player__full-screen" onClick={this._handelFullScreenClick}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen" />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
      </>
    );
  }
}
Player.propTypes = {
  onPlayerToggle: PropTypes.func.isRequired,
  activeFilm: PropTypes.object.isRequired,
  onFilmDurationUpdate: PropTypes.func.isRequired,
  filmDuration: PropTypes.object.isRequired,
};
export default withFilmDuration(Player);
