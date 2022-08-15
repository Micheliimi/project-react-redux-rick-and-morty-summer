import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { username } = this.props;
    return (
      <h1 className="title">
        Olá,
        {' '}
        { username }
      </h1>
    );
  }
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  username: state.user.username,
});

export default connect(mapStateToProps)(Header);
