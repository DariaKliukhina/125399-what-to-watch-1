import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import MainScreen from '../main-screen/main-screen.jsx';
import {ActionCreator} from "../../reducer/data/data";
import {actionChangeAuthorizationRequestStatus} from "../../reducer/user/user";
import SignIn from "../signIn/signIn.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      authorized,
      authorizationRequired,
      films,
      genres,
      activeGenre,
      onGenreClick,
      currentUser,
      showLogIn
    } = this.props;

    const data = {
      authorized,
      authorizationRequired,
      films,
      genres,
      activeGenre,
      onGenreClick,
      showLogIn,
      userAvatar: `https://es31-server.appspot.com/` + currentUser.userAvatar,
      userName: currentUser.userName
    };

    if (!authorizationRequired) {
      return <MainScreen {...data} />;
    } else {
      return <SignIn />;
    }
  }
}

App.propTypes = {
  authorized: PropTypes.bool.isRequired,
  authorizationRequired: PropTypes.bool.isRequired,
  showLogIn: PropTypes.func.isRequired,
  films: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    userEmail: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userAvatar: PropTypes.string.isRequired
  })
};

const mapStateToProps = (state) => {
  return {
    activeGenre: state.data.activeGenre,
    films: state.data.films,
    genres: state.data.genres,
    authorized: state.user.authorized,
    authorizationRequired: state.user.isAuthorizationRequired,
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGenreClick: (newGenre) => {
    dispatch(ActionCreator.changeGenre(newGenre));
    if (newGenre === `All genres`) {
      dispatch(ActionCreator.showAllFilms());
    } else {
      dispatch(ActionCreator.changeFilms());
    }
  },

  showLogIn: () => {
    dispatch(actionChangeAuthorizationRequestStatus(true));
  }
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
