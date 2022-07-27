import React from 'react';
// Importar connect
// import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { username } = this.props;
    return (
      <h1 className='title'>Olá { username }</h1>
    );
  }
}

// Header.propTypes = {
//   username: PropTypes.string.isRequired,
// };


export default Header;