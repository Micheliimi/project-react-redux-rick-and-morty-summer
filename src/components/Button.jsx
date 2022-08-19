import React from 'react';
import PropTypes from 'prop-types';

// em componentes funcionais, as props são passadas conforme abaixo (via argumento da função)
// uma outra alternativa, caso fosse um componente maior, poderia ser passado assim:
// const Button = (props) => {
//  const { label, onClick, disabled, data, className } = props;
//  ...resto do componente
// }

const Button = ({ label, onClick, disabled, data, className }) => (
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
