// src/pages/Cadastro.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Cadastro.css";
import waveIcon from "../assets/logoEcommerces2.png"; 
import loginIcon from "../assets/imageeLogin.png";
import cartIcon from "../assets/imageCarrinho.png";
import cartImage from "../assets/imagemPaginaCarrinho.png";

function Cadastro() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthDate: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);

    setTimeout(() => {
      if (formData.password !== formData.confirmPassword) {
        setMessage("As senhas não coincidem!");
      } else {
        setMessage("Cadastro realizado com sucesso!");
        setTimeout(() => navigate("/login"), 2000);
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-content">
        <div className='menu_superior'>
          <div className="logo">
            <img src={waveIcon} alt="logo_WavesMusic" id="logo_wavesMusic" />
            <h1 className="nome_marca">WavesMusic</h1>
          </div>
          
          <div className='links'>
            <Link to="/">Início</Link>
            <Link to="/produtos">Produtos</Link>
            <Link to="/sobre">Sobre</Link>
          </div>
          
          <div className="caixa-pesquisa">
            <div className="buscar">
            <i className="icone fas fa-search"></i>
              <input
                type="text"
                placeholder="Buscar discos, artistas..."
                className="entrada-busca" 
              />         
            </div>
          </div>

          <div className="login_carrinho">
            <Link to="/login">
              <img src={loginIcon} alt="Icone Login" className="icone-login" />
            </Link>
            <Link to="/carrinho">
              <img src={cartIcon} alt="Icone Carrinho" className="icone-carrinho" />
            </Link>
          </div>
        </div>
        <div className="cadastro-logo">
          <div className="logoInferior">
            <img src={waveIcon} alt="logo_WavesMusic" id="logo_inferior" />
          </div>
          <div className="nomeMarca">
            <h1>WavesMusic</h1>
            <p className="cadastro-subtitle">Crie sua conta</p>
          </div>
        </div>

        <div className="cadastro-card">
          <h2 className="cadastro-card-title">Cadastro</h2>
          <p className="cadastro-card-subtitle">
            Preencha os dados para criar sua conta
          </p>

          <form onSubmit={handleSubmit} className="cadastro-form">
            <div className="form-group">
              <label htmlFor="name">Nome completo</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="birthDate">Data de nascimento</label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar senha</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirme sua senha"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {message && (
              <div className={`cadastro-message ${message.includes("sucesso") ? "success" : "error"}`}>
                {message}
              </div>
            )}

            <button type="submit" disabled={isLoading} className="cadastro-button">
              {isLoading ? "Cadastrando..." : "Criar conta"}
            </button>
          </form>

          <div className="cadastro-footer">
            <p>
              Já tem uma conta?{" "}
              <Link to="/login" className="cadastro-link">
                Fazer login
              </Link>
              <p>
              <Link to="/" className="login-link">
                Voltar para o início
              </Link>
            </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
