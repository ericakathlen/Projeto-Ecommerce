import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Produtos.css";

// Importe suas imagens
import logo from "../assets/logoEcommerces2.png";
import loginIcon from "../assets/imageeLogin.png";
import cartIcon from "../assets/imageCarrinho.png";

function Produtos() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/albums")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAlbums(data);
        } else {
          console.error("Resposta não é um array:", data);
          setAlbums([]);
        }
      })
      .catch((err) => {
        console.error("Erro ao buscar álbuns:", err);
      });
  }, []);

  return (
    <div className="produtos-container">
      <div className="principal">
        {/* Menu Superior */}
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
      </div>

      {/* Texto e Filtros */}
      <div className="texto">
        <h1>Nosso Catálogo</h1>
        <p>Explore nossa coleção completa de discos e vinis cuidadosamente selecionados</p>
        <div className="filtros-container">
          <label>Filtros:</label>
          <input type="text" placeholder="Buscar por nome ou artista..." />
          <select>
            <option>Nome</option>
            <option>Data</option>
            <option>Popularidade</option>
          </select>
        </div>

        {/* Produtos */}
        <div className="produtos">
          {albums.length > 0 ? (
            albums.map((album) => (
              <div className="card" key={album.id}>
                <span className="tag-ano">{new Date(album.data_lancamento).getFullYear()}</span>
                <img src={album.url_capa} alt={`Capa do álbum ${album.nome}`} />
                <span className="genero">{album.genero?.nome}</span>
                <div className="titulo">{album.nome}</div>
                <div className="artista">{album.artist?.nome}</div>
                <div className="preco-avaliacao">
                  <div className="preco">R${album.preco}</div>
                  <div className="nota">
                    <i className="fas fa-star"></i> ⭐AV
                  </div>
                </div>
                <div className="acoes">
                  <button>Ver Detalhes</button>
                  <button className="btn-carrinho">
                    <img src={cartIcon} alt="Icone Carrinho" id="icone-carrinho" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Nenhum álbum encontrado.</p>
          )}
        </div>
        
      </div>
    </div>
  );
}

export default Produtos;
