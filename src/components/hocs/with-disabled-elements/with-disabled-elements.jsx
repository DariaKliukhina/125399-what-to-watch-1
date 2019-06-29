import React, {PureComponent} from "react";

const withDisabledElements = (WrappedComponent) => {
  class WithDisabledElements extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        submitButtonDisabled: true,
        textareaDisabled: true
      };

      this.onSubmitButtonStateChange = this.onSubmitButtonStateChange.bind(this);
      this.onTextareaStateChange = this.onTextareaStateChange.bind(this);
    }

    onSubmitButtonStateChange(state) {
      this.setState({
        submitButtonDisabled: state
      });
    }

    onTextareaStateChange(state) {
      this.setState({
        textareaDisabled: state
      });
    }

    render() {
      const {submitButtonDisabled, textareaDisabled} = this.state;

      return (
        <WrappedComponent
          {...this.props}
          submitButtonDisabled={submitButtonDisabled}
          textareaDisabled={textareaDisabled}
          changeSubmitButtonState={this.onSubmitButtonStateChange}
          changeTextareaState={this.onTextareaStateChange}
        />
      );
    }
  }

  return WithDisabledElements;
};

export default withDisabledElements;
