import React from 'react';
//importar connect
// import PropTypes from 'prop-types';
import fetchAPI from '../services/data';
import Cards from '../components/Cards';
import Header from '../components/Header';
//Importar action

class Mainpage extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: [],
    };
  }

  callAPI = async () => {
    const result = await fetchAPI();
    this.setState({
      characters: result || [],
    })
    const { characters } = this.state;
    console.log(characters);
  }

  componentDidMount = () => {
    this.callAPI();
  }

  //Função que chama a action e redireciona para a page Personagens!

  render() {
    const { username} = this.props;
    const { characters } = this.state;
    return (
      <div>
        <Header username={ username }/>
        <Cards characters={ characters }/>
      </div>
    )
  }
}

// Characters.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func.isRequired,
//   }).isRequired,
//   addUser: PropTypes.func.isRequired,
// };

export default Mainpage;