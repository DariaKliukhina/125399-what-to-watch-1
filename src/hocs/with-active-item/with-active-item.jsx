import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

const withActiveItem = (WrappedComponent) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      if (props.activeItem) {
        this.state = {
          activeItem: props.activeItem
        };
      } else {
        this.state = {
          activeItem: null
        };
      }

      this.onActiveItemChange = this.onActiveItemChange.bind(this);
    }

    onActiveItemChange(selectedItem) {
      this.setState({activeItem: selectedItem});

      if (this.props.onGenreClick) {
        this.props.onGenreClick(selectedItem);
      }
    }

    render() {
      const {activeItem} = this.state;

      return (
        <WrappedComponent
          {...this.props}
          activeItem={activeItem}
          onActiveItemChange={this.onActiveItemChange}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    onGenreClick: PropTypes.func,
    activeItem: PropTypes.string
  };

  return WithActiveItem;
};

export default withActiveItem;
