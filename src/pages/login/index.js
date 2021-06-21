import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../../components/container';
import { LoginForm } from './style';
import api from '../../services/api';
import {
  localStorageSetToken,
  localStorageGetToken,
} from '../../services/localStorage';

function Login() {
  const [infos, setInfos] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const token = localStorageGetToken();

  if (token) {
    history.push('/');
  }

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/login', infos);

      if (response.status !== 201) {
        // implementar alerta de erro login
        return console.log('usuario invalido');
      }

      if (response.data.token) {
        localStorageSetToken(response.data.token);
      }

      return history.push('/');
    } catch (error) {
      // implementar o alerta de erro no login
      return console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setInfos({ ...infos, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <Container>
        <h1>Login</h1>

        <LoginForm onSubmit={onFormSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="lucas.soares@crescere.com"
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            onChange={handleInputChange}
          />
          <button type="submit">Login</button>
        </LoginForm>
      </Container>
    </div>
  );
}

export default Login;
