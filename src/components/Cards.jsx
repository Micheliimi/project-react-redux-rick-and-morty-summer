import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

function Cards() {
  const characters = useSelector((state) => state.characters.allCharacters);
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

export default Cards;
