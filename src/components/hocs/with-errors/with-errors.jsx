import React, {PureComponent} from "react";

const withErrors = (WrappedComponent) => {
  class WithErrors extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        emailError: false,
        passwordError: false
      };

      this.validateMail = this.validateMail.bind(this);
      this.validatePassword = this.validatePassword.bind(this);
    }

    validateMail(enteredEmail) {
      const regularEmailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regularEmailExpression.test(enteredEmail)) {
        this.setState({
          emailError: true
        });

        return false;
      } else {
        this.setState({
          emailError: false
        });

        return true;
      }
    }

    validatePassword(enteredPassword) {
      if (!enteredPassword) {
        this.setState({
          passwordError: true
        });

        return false;
      } else {
        this.setState({
          passwordError: false
        });

        return true;
      }
    }

    render() {
      const {emailError, passwordError} = this.state;

      return (
        <WrappedComponent
          validateMail={this.validateMail}
          validatePassword={this.validatePassword}
          emailError={emailError}
          passwordError={passwordError}
          {...this.props}
        />
      );
    }
  }

  return WithErrors;
};

export default withErrors;
