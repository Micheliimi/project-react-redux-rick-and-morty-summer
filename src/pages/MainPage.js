import React from 'react';
import fetchAPI from '../services/data';
import Cards from '../components/Cards';
import Header from '../components/Header';

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

export default Mainpage;