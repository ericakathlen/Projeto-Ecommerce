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
      <div className="logo-section">
        <div className="logo-circle">
          <img src={waveIcon} alt="Wave Icon" className="wave-icon" />
        </div>

        <h1 className="app-title">WavesMusic</h1>
        <p className="app-subtitle">Entre na sua conta</p>
      </div>
    
      <div className="login-card">
        <div className="login-header">
          <h2 className="login-title">Login</h2>
          <p className="login-subtitle">Entre com suas credenciais</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Senha</label>
            <div className="input-wrapper">
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="login-button">Entrar</button>
        </form>

        <div className="form-links">
          <p className="create-account">
            Não tem uma conta? <Link to="/cadastro">Criar conta</Link>
          </p>
          <Link to="/" className="back-link">Voltar para o início</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
