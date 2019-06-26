import React, {PureComponent} from "react";

import Player from "../../player/player.jsx";

const withPlayer = (WrappedComponent) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        playerActive: false
      };

      this.togglePlayer = this.togglePlayer.bind(this);
    }

    togglePlayer() {
      const {playerActive} = this.state;

      this.setState({playerActive: !playerActive});
    }

    render() {
      const {playerActive} = this.state;

      if (!playerActive) {
        return (
          <WrappedComponent {...this.props} togglePlayer={this.togglePlayer} />
        );
      } else {
        return <Player {...this.props} togglePlayer={this.togglePlayer} />;
      }
    }
  }

  return WithPlayer;
};

export default withPlayer;
