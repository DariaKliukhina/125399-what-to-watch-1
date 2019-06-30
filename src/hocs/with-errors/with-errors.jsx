import React, {PureComponent} from "react";

const withErrors = (WrappedComponent) => {
  class WithErrors extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        emailError: false,
        passwordError: false
      };

      this.onEmailValidate = this.onEmailValidate.bind(this);
      this.onPasswordValidate = this.onPasswordValidate.bind(this);
    }

    onEmailValidate(enteredEmail) {
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

    onPasswordValidate(enteredPassword) {
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
          onEmailValidate={this.onEmailValidate}
          onPasswordValidate={this.onPasswordValidate}
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
