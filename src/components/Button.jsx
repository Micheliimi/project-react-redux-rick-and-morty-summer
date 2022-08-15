import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { label, onClick, disabled, data, className } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
        disabled={ disabled }
        data-testid={ data }
        className={ className }
      >
        { label }
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  data: PropTypes.string,
  className: PropTypes.string,
}.isRequired;

Button.defaultProps = {
  data: '',
  className: '',
  disabled: false,
};
