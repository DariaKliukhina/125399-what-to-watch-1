import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.video = React.createRef();
  }

  render() {
    const {preview, poster, options} = this.props;
    const {width, height, isMuted = true, isLoop = true} = options;
    return (<video
      ref={this.video}
      src={preview}
      poster={poster}
      width={width}
      height={height}
      loop={isLoop}
      muted={isMuted}
    />);
  }
}

VideoPlayer.propTypes = {
  preview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  options: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    isMuted: PropTypes.bool,
    isLoop: PropTypes.bool,
  }).isRequired,

};

export default VideoPlayer;


