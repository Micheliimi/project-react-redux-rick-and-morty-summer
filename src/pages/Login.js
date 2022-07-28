import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUser } from '../actions';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      username: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  sendAction = () => {
      const { redirect, username } = this.state;
      const { addUserDispatch } = this.props;
      this.setState(!redirect);
      addUserDispatch(username);
    }

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
//   addUserDispatch: PropTypes.func.isRequired,
// };

const mapDispatchToProps = (dispatch) => ({
  addUserDispatch: (username) => dispatch(addUser(username))
})

export default connect(null, mapDispatchToProps)(Login);
