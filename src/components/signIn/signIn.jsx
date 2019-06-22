import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Operation} from "../../reducer/user/user";
import withErrors from "../hocs/withErrors/withErrors.jsx";
import history from "../../history";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this._emailRef = React.createRef();
    this._passwordRef = React.createRef();

    this.state = {
      emailError: false,
      passwordError: false
    };

    this._handelFormSubmit = this._handelFormSubmit.bind(this);
    this._setMessage = this._setMessage.bind(this);
  }

  render() {
    const {emailError, passwordError} = this.props;

    const emailFieldClass = emailError
      ? `sign-in__field sign-in__field--error`
      : `sign-in__field`;
    const passwordFieldClass = passwordError
      ? `sign-in__field sign-in__field--error`
      : `sign-in__field`;
    const messageElement = this._setMessage();

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

      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form">
            {messageElement}
            <div className="sign-in__fields">
              <div className={emailFieldClass}>
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  ref={this._emailRef}
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-email"
                >
                  Email address
                </label>
              </div>
              <div className={passwordFieldClass}>
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  ref={this._passwordRef}
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-password"
                >
                  Password
                </label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button
                className="sign-in__btn"
                type="submit"
                onClick={this._handelFormSubmit}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
      </>
    );
  }

  _handelFormSubmit(evt) {
    evt.preventDefault();
    const {
      changeAuthorizationStatus,
      validateMail,
      validatePassword
    } = this.props;
    const mailIsValid = validateMail(this._emailRef.current.value);
    const passwordIsValid = validatePassword(this._passwordRef.current.value);
    if (passwordIsValid && mailIsValid) {
      const userInfo = {
        email: this._emailRef.current.value,
        password: this._passwordRef.current.value
      };
      changeAuthorizationStatus(userInfo, history);
    }
  }

  _setMessage() {
    const {emailError, passwordError, authorizationFailed} = this.props;
    if (emailError || passwordError || authorizationFailed) {
      let message;
      if (emailError && passwordError) {
        message = `Please correctly fill both fields`;
      } else if (emailError) {
        message = `Please enter a valid email address`;
      } else if (passwordError) {
        message = `Please enter a password`;
      }
      if (authorizationFailed) {
        message = `We can’t recognize this email and password combination. Please try again.`;
      }
      return (
        <div className="sign-in__message">
          <p>{message}</p>
        </div>
      );
    }
    return null;
  }
}

SignIn.propTypes = {
  changeAuthorizationStatus: PropTypes.func.isRequired,
  validateMail: PropTypes.func.isRequired,
  validatePassword: PropTypes.func.isRequired,
  emailError: PropTypes.bool.isRequired,
  passwordError: PropTypes.bool.isRequired,
  authorizationFailed: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    authorizationFailed: state.user.authorizationFailed
  });

const mapDispatchToProps = (dispatch) => ({
  changeAuthorizationStatus: (user, windowHistory) => {
    dispatch(Operation.authorizeUser(user, windowHistory));
  }
});

export {SignIn};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrors(SignIn));
