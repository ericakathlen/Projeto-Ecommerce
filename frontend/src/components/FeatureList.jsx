import React from "react";

function FeatureList() {
  return (
    <div className="propaganda">
      <div className="tituloPropaganda">
        <h1>Por que escolher a WavesMusic?</h1>
      </div>

      <div className="motivos">
        <div className="beneficio-lista">
          <div className="beneficio">
            <div className="iconesPropaganda">🎖️</div>
            <h1>Qualidade Premium</h1>
            <p>Discos e vinis selecionados com a mais alta qualidade de som e conservação</p>
          </div>

          <div className="beneficio">
            <div className="iconesPropaganda">📈</div>
            <h1>Sempre Atualizado</h1>
            <p>Catálogo constantemente atualizado com os últimos lançamentos e raridades</p>
          </div>

          <div className="beneficio">
            <div className="iconesPropaganda">🎧</div>
            <h1>Experiência Única</h1>
            <p>Desfrute de uma experiência de compra personalizada e envolvente</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureList;