import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Cards extends Component {
  render() {
    const { characters } = this.props;
    return (
      <div className="border">
          {characters.length > 0 &&  characters.map((character) => 
          (
            <div key={ characters.id } className="characteres-border">
              <h2>{ character.name }</h2>
                <img src={character.image} alt={ character.name}/>
            </div>
            ))}
      </div>
    );
  }
}

export default Cards;