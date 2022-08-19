import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUser } from '../redux/actions';
import Input from '../components/Input';
import Button from '../components/Button';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  // exemplo de uso do useHistory para redirecionar para a página de personagens (antes isso era feito através de um redirect)
  const history = useHistory();

  // sugestão de estado local e handleChange unificados
  // const [loginInfo, setLoginInfo] = useState({
  //   username: '',
  //   password: '',
  // });
  //
  // const handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   setLoginInfo({
  //     ...loginInfo,
  //     [name]: value
  //   });
  // }

  const handleUsernameChange = ({ target: { value } }) => {
    setUsername(value);
  };
  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleClick = () => {
    dispatch(addUser(username));

    // após o dispatch, a aplicação é direcionada para a página de personagens
    history.push('/personagens');
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <div className="input-login">
        <Input
          label="Username: "
          type="text"
          // caso seja usado um estado único
          // onChange={ handleChange }
          onChange={ handleUsernameChange }
          value={ username }
          name="username"
        />
        <Input
          label="Senha: "
          type="password"
          // caso seja usado um estado único
          // onChange={ handleChange }
          onChange={ handlePasswordChange }
          value={ password }
          name="password"
        />
      </div>
      <Button
        type="button"
        label="Entrar"
        onClick={ handleClick }
      />
    </div>

  );
}

export default Login;
