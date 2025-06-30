import React from "react";
import "../styles/Sobre.css";
import { Link } from "react-router-dom";
import logoWaves from "../assets/logoEcommerces2.png";
import loginIcon from "../assets/imageeLogin.png";
import cartIcon from "../assets/imageCarrinho.png";

export default function Sobre() {
  return (
    <div className="sobre.container">
      <div className="principal">
        <div className="menu_superior">
          <div className="logo">
            <img src={logoWaves} alt="logo_WavesMusic" id="logo_wavesMusic" />
            <h1 className="nome_marca">WavesMusic</h1>
          </div>

          <div className="links">
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
      <div className="sobre-container">
        <div className="logoInferior">
          <img src={logoWaves} alt="logo" id="logo_inferior" />
        </div>
        <div className="nomeMarca">
          <h1>Quem Somos</h1>
          <h2>Um grupo apaixonado por músicas</h2>
        </div>
      </div>

    </div>

    <div className="sobre-section">
      <h2 className="sobre-titulo">Nossa Missão</h2>
      <p className="sobre-texto">
        Conectar pessoas através da música, oferecendo discos de qualidade premium.
      </p>

      <h2 className="sobre-titulo">Nossa Visão</h2>
      <p className="sobre-texto">
        Ser referência nacional em uma comunidade de amantes da música.
      </p>

      <h2 className="sobre-titulo">Nossos Valores</h2>
      <ul className="sobre-lista">
        <li>🎵 Qualidade</li>
        <li>🤝 Respeito à história da música</li>
        <li>💬 Atendimento personalizado</li>
        </ul>
      </div>

      <div className="parteFinal">
        <h1>Faça parte da nossa comunidade!</h1>
        <h2>Receba novidades e raridades exclusivas</h2>
        <div className="botaoFinal">
          <a href="/Cadastro" className="btn-produtos">🎵 Inscreva-se</a>
          <Link to="/" className="btn-produtos" style={{ marginLeft: "10px" }}>
            Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
}
