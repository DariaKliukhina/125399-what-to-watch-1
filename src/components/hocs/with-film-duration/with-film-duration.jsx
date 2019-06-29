import React, {PureComponent} from "react";

const withFilmDuration = (WrappedComponent) => {
  class WithFilmDuration extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        filmDuration: {
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      };

      this.onFilmDurationUpdate = this.onFilmDurationUpdate .bind(this);
    }

    onFilmDurationUpdate(hours, minutes, seconds) {
      this.setState({
        filmDuration: {hours, minutes, seconds}
      });
    }

    render() {
      const {filmDuration} = this.state;

      return (
        <WrappedComponent
          {...this.props}
          filmDuration={filmDuration}
          updateFilmDuration={this.onFilmDurationUpdate}
        />
      );
    }
  }

  return WithFilmDuration;
};

export default withFilmDuration;
