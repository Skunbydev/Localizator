import React from 'react';
import '../css/pages/login.css';

import loginPhoto from '../assets/login-photo.jpeg';

const Login = () => {
  return (
    <div>
      <div className="login-container">
        <div className="login-photo">
          <img src={loginPhoto} alt="login-photo" width={650} height={396} />
        </div>
        <div className="login-inputs">
          <h1>Seja bem vindo!</h1>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <label htmlFor="password">Senha:</label>
          <input type="password" />
        </div>
      </div>
    </div>
  );
};

export default Login;
