import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cards from '../components/Cards';
import Header from '../components/Header';
import { fetchCharacters } from '../redux/actions';

class Mainpage extends React.Component {
  componentDidMount = () => {
    const { fetchCharactersDispatch } = this.props;
    fetchCharactersDispatch();
  }

  render() {
    return (
      <div>
        <Header />
        <Cards />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCharactersDispatch: () => dispatch(fetchCharacters()),
});

Mainpage.propTypes = {
  fetchCharactersDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Mainpage);
