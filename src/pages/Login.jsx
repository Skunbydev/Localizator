import React from 'react';
import '../css/style.css';

import loginPhoto from '../assets/login-photo.jpeg';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-photo">
          <img src={loginPhoto} alt="login-photo" />
        </div>
        <div className="login-inputs">
          <h1>Seja bem vindo!</h1>
          <form action="post">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="insira seu email" />
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder="insira sua senha"
            />
            <p>esqueci a senha</p>
            <button className="button-m" type="submit">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
