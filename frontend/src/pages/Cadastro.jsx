// src/pages/Cadastro.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Cadastro.css"; // Import do CSS
import waveIcon from "../assets/logoEcommerces2.png"; // Sua imagem

function Cadastro() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthDate: "",
    password: "",
    confirmPassword: "",
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
        {/* Logo */}
        <div className="cadastro-logo">
          <div className="cadastro-logo-circle">
            <img src={waveIcon} alt="WavesMusic" className="cadastro-wave-icon" />
          </div>
          <h1 className="cadastro-title">WavesMusic</h1>
          <p className="cadastro-subtitle">Crie sua conta</p>
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
