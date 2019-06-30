import React, {PureComponent} from "react";
import PropsTypes from "prop-types";

const MaximumFilmsPerPack = 20;

const withVisibleFilms = (WrappedComponent) => {
  class WithVisibleFilms extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        filmsPack: 1,
        visibleFilms: []
      };

      this._displayFilms = this._displayFilms.bind(this);
    }

    _displayFilms() {
      const {films} = this.props;
      let {filmsPack, visibleFilms} = this.state;

      if (films.length > MaximumFilmsPerPack) {
        if (filmsPack > 1) {
          if (films.length - visibleFilms.length > MaximumFilmsPerPack) {
            visibleFilms = visibleFilms.concat(
                films.slice(
                    (filmsPack - 1) * MaximumFilmsPerPack,
                    filmsPack * MaximumFilmsPerPack
                )
            );
            this.setState({filmsPack: filmsPack + 1});
          } else {
            visibleFilms = visibleFilms.concat(
                films.slice((filmsPack - 1) * MaximumFilmsPerPack, films.length)
            );
          }
        } else {
          visibleFilms = films.slice(0, MaximumFilmsPerPack);
          this.setState({filmsPack: filmsPack + 1});
        }
      } else {
        visibleFilms = films.slice();
      }

      this.setState({visibleFilms});
    }

    render() {
      const {films} = this.props;
      const {visibleFilms} = this.state;

      if (!visibleFilms.length) {
        if (films.length > MaximumFilmsPerPack) {
          return (
            <WrappedComponent
              {...this.props}
              films={films.slice(0, MaximumFilmsPerPack)}
            />
          );
        } else {
          return <WrappedComponent {...this.props} films={films} />;
        }
      } else {
        return <WrappedComponent {...this.props} films={visibleFilms} />;
      }
    }
  }

  WithVisibleFilms.propTypes = {
    films: PropsTypes.arrayOf(
        PropsTypes.shape({
          id: PropsTypes.number.isRequired,
          name: PropsTypes.string.isRequired,
          genre: PropsTypes.string.isRequired,
          poster: PropsTypes.string.isRequired,
          preview: PropsTypes.string.isRequired
        })
    ).isRequired
  };

  return WithVisibleFilms;
};

export default withVisibleFilms;
