import React from "react";

function AlbumCard() {
  // Substitua depois por props ou map
  return (
    <div className="card">
      <div className="card-img">
        <span className="avaliacao">⭐ AV</span>
        {/* Aqui pode vir a imagem do álbum */}
      </div>
      <span className="genero">%=album.genero%</span>
      <h2 className="titulo">%=album.nome%</h2>
      <p className="artista">%=album.artista%</p>
      <p className="preco">R$ %=album.preco%</p>
      <button className="btn-detalhes">Ver Detalhes</button>
    </div>
  );
}

export default AlbumCard;