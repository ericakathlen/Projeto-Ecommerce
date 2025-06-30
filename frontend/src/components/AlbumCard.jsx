import React from "react";

function AlbumCard({ album }) {
  // Substitua depois por props ou map
  return (
    <div className="card">
      <div className="card-img">
        <span className="avaliacao">⭐ AV</span>
        <img className="card-img" src={album.url_capa} alt="" />
      </div>
      <span className="genero">{album.genero.nome}</span>
      <h2 className="titulo">{album.nome}</h2>
      <p className="artista">{album.artist.nome}</p>
      <p className="preco">{album.preco}</p>
      <button className="btn-detalhes">Ver Detalhes</button>
    </div>
  );
}

export default AlbumCard;