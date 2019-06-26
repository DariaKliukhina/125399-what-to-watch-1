import React, {PureComponent} from "react";

const withVideo = (WrappedComponent) => {
  return class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        loaded: false
      };

      this.checkVideoLoadStatus = this.checkVideoLoadStatus.bind(this);
      this.getVideoLoadStatus = this.getVideoLoadStatus.bind(this);
    }

    checkVideoLoadStatus(videoElement) {
      if (videoElement) {
        videoElement.onloadeddata = () => {
          this.setState({
            loaded: true
          });
        };
      }
    }

    getVideoLoadStatus() {
      return this.state.loaded;
    }

    render() {
      return (
        <WrappedComponent
          checkVideoLoadStatus={this.checkVideoLoadStatus}
          getVideoLoadStatus={this.getVideoLoadStatus}
          {...this.props}
        />
      );
    }
  };
};

export default withVideo;
