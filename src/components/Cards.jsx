import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Cards extends Component {
  render() {
    const { characters } = this.props;
    return (
      <div className="border">
        {characters.length > 0 && characters.map((character) => (
          <div key={ `${character.id}${character.name}` } className="characteres-border">
            <h2>{ character.name }</h2>
            <img src={ character.image } alt={ character.name } />
          </div>
        ))}
      </div>
    );
  }
}

Cards.propTypes = {
  characters: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  characters: state.characters.allCharacters,
});

export default connect(mapStateToProps)(Cards);
