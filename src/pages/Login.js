import React from 'react';
//importar connect
// import PropTypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';
//Importar action

class Login extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     email: '',
  //     username: '',
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange({ target }) {
  //   const { name, value } = target;
  //   this.setState({ [name]: value });
  // }

  //Função que chama a action e redireciona para a page Personagens!

  render() {
    // const { username, password } = this.state;
    const { username, password, handleChange, sendAction } = this.props;
    return (
      <div>
            <div>
              <Input
                label="Username: "
                type="text"
                onChange={ handleChange }
                value={ username }
                name="username"
              />
              <Input
                label="Senha: "
                type="password"
                onChange={ handleChange }
                value={ password }
                name="password"
              />
            </div>
            <Button
              type="button"
              label="Entrar"
              onClick={ sendAction }
            />
      </div>

    );
  }
}

// Login.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func.isRequired,
//   }).isRequired,
//   addUser: PropTypes.func.isRequired,
// };

export default Login;
