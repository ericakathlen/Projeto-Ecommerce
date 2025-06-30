import React from "react";

function AlbumCard({ album }) {
  return (
    <div className="card">
      <div className="card-img">
        <span className="avaliacao">⭐ AV</span>
        <img className="card-img" src={album.url_capa} alt={album.nome} />
      </div>
      <span className="genero">{album.genero?.nome || "Sem Gênero"}</span>
      <h2 className="titulo">{album.nome}</h2>
      <p className="artista">{album.artist?.nome || "Artista desconhecido"}</p>
      <p className="preco">R$ {album.preco}</p>
      <button className="btn-detalhes">Ver Detalhes</button>
    </div>
  );
}

export default AlbumCard;
