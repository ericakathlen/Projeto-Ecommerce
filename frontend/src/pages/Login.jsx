import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import waveIcon from '../assets/logoEcommerces2.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      alert(`Login realizado!\nEmail: ${email}`);
      navigate("/"); // Redireciona para Home após login
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-logo">
          <div className="logoInferior">
            <img src={waveIcon} alt="logo_WavesMusic" id="logo_inferior" />
          </div>
          <div className="nomeMarca">
            <h1>WavesMusic</h1>
            <p className="login-subtitle">Entre na sua conta</p>
          </div>
        </div>
    
        <div className="login-card">
          <h2 className="login-card-title">Login</h2>
          <p className="login-card-subtitle">Entre com suas credenciais</p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-button">Entrar</button>
          </form>

          <div className="login-footer">
            <p>
              Não tem uma conta?{" "}
              <Link to="/cadastro" className="login-link">
                Criar conta
              </Link>
            </p>
            <p>
              <Link to="/" className="login-link">
                Voltar para o início
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
