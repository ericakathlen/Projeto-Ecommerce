import React, { useState } from 'react';
import './Login.css';
import waveIcon from './assets/wave-icon.png'; // Importando o ícone


const Login = () => {
  const [email, setEmail] = useState(""); // Estado para armazenar o e-mail
  const [password, setPassword] = useState(""); // Estado para armazenar a senha

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o envio do formulário
    if (email && password) {
      alert(`Login realizado!\nEmail: ${email}`);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="container">
      {/* Logo Section */}
      <div className="logo-section">
        <div className="logo-circle">
          <img src={waveIcon} alt="Wave Icon" className="wave-icon" /> {/* Imagem do ícone circular */}
        </div>
        <h1 className="app-title">WavesMusic</h1>
        <p className="app-subtitle">Entre na sua conta</p>
      </div>

      {/* Login Card */}
      <div className="login-card">
        <div className="login-header">
          <h2 className="login-title">Login</h2>
          <p className="login-subtitle">Entre com suas credenciais</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <div className="input-wrapper">
              <svg className="input-icon" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}  // Atualiza o estado do e-mail
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Senha</label>
            <div className="input-wrapper">
              <svg className="input-icon" viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <circle cx="12" cy="16" r="1" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}  // Atualiza o estado da senha
                required
              />
            </div>
          </div>

          <button type="submit" className="login-button">Entrar</button>
        </form>

        <div className="form-links">
          <p className="create-account">
            Não tem uma conta? <a href="#" onClick={() => alert('Criar conta')}>Criar conta</a>
          </p>
          <a href="#" className="back-link" onClick={() => alert('Voltar para o início')}>Voltar para o início</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
