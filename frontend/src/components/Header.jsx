import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logoEcommerces2.png';
import loginIcon from '../assets/imageeLogin.png';
import cartIcon from '../assets/imageCarrinho.png';


function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      navigate(`/produtos?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="menu_superior">
      <div className="logo">
        <img src={logo} alt="logo_WavesMusic" id="logo_wavesMusic" />
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
          <input type="text" placeholder="Buscar discos, artistas..." className="entrada-busca" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleSearch} />
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
  );
}

export default Header;