import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logoEcommerces2.png';
import loginIcon from '../assets/imageeLogin.png';
import cartIcon from '../assets/imageCarrinho.png';
import AlbumCard from './AlbumCard';

function Header() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (query.trim() === "") return;

    try {
      const response = await fetch(`http://localhost:3001/api/v1/albums/search?q=${query}`);
      const data = await response.json();

      if (Array.isArray(data)) {
        setResults(data);
      } else {
        console.error("Formato inesperado:", data);
        setResults([]);
      }
    } catch (error) {
      console.error("Erro na busca:", error);
      setResults([]);
    }
  };

  return (
    <>
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
            <input
              type="text"
              placeholder="Buscar discos, artistas..."
              className="entrada-busca"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
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

      {/* Resultados da busca */}
      {results.length > 0 && (
        <div className="resultados-busca">
          {results.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      )}
    </>
  );
}

export default Header;
