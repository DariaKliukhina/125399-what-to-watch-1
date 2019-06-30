import React, {PureComponent} from "react";

import Player from "../../components/player/player.jsx";

const withPlayer = (WrappedComponent) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        playerActive: false
      };

      this.onPlayerToggle = this.onPlayerToggle.bind(this);
    }

    onPlayerToggle() {
      const {playerActive} = this.state;

      this.setState({playerActive: !playerActive});
    }

    render() {
      const {playerActive} = this.state;

      if (!playerActive) {
        return (
          <WrappedComponent {...this.props} onPlayerToggle={this.onPlayerToggle} />
        );
      } else {
        return <Player {...this.props} onPlayerToggle={this.onPlayerToggle} />;
      }
    }
  }

  return WithPlayer;
};

export default withPlayer;
