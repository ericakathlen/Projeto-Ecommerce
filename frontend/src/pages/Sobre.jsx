import React from "react";
import "../styles/Sobre.css";
import { Link } from "react-router-dom";
import logoWaves from "../assets/logoEcommerces2.png";

export default function Sobre() {
  return (
    <div className="container">
      <div className="principal">   
        <div className="logoInferior">
          <img src={logoWaves} alt="logo" id="logo_inferior" />
        </div>
        <div className="nomeMarca">
          <h1>Quem Somos</h1>
          <h2>Um grupo apaixonado por músicas</h2>
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
          <a href="#" className="btn-produtos">🎵 Inscreva-se</a>
          <Link to="/" className="btn-produtos" style={{ marginLeft: "10px" }}>
            Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
}
