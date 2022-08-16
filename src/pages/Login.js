import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      password: '',
      username: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  sendAction = () => {
    const { username } = this.state;
    const { addUserDispatch } = this.props;
    addUserDispatch(username);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="login-page">
        <h1>Login</h1>
        <div className="input-login">
          <Input
            label="Username: "
            type="text"
            onChange={ this.handleChange }
            value={ username }
            name="username"
          />
          <Input
            label="Senha: "
            type="password"
            onChange={ this.handleChange }
            value={ password }
            name="password"
          />
        </div>
        <Button
          type="button"
          label="Entrar"
          onClick={ this.sendAction }
        />
      </div>

    );
  }
}

Login.propTypes = {
  addUserDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addUserDispatch: (username) => dispatch(addUser(username)),
});

export default connect(null, mapDispatchToProps)(Login);
