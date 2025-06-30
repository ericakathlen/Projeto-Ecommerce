import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import AlbumCard from '../components/AlbumCard';
import FeatureList from '../components/FeatureList';
import "../styles/Home.css";
import logoWaves from '../assets/logoEcommerces2.png';

function Home() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/albums')
      .then(response => response.json())
      .then(data => setAlbums(data))
      .catch(error => console.error('Erro ao buscar álbuns:', error));
  }, []);

  return (
    <div className="home-container">
      <div className="principal">
        <Header />

        <div className="logoInferior">
          <img src={logoWaves} alt="logo_WavesMusic" id="logo_inferior" />
        </div>

        <div className="nomeMarca">
          <h1>WavesMusic</h1>
          <br />
          <h2>Navegue pelas ondas das músicas e descubra os melhores discos e vinis</h2>
        </div>

        <div className="botao">
          <a href="/pagProdutos" className="btn-catalogo">🎵 Explorar Catálogo</a>
        </div>
      </div>

      <div className="albunsDestaque">
        <section className="cabecalho">
          <span className="destaquesPill">Destaques</span>
          <h1 className="tituloDestaque">Álbuns em Destaque</h1>
          <p className="destaquesDescricao">
            Descubra nossa seleção especial dos melhores lançamentos e clássicos atemporais
          </p>
        </section>

        <div className="albuns">
          <div className="grid-cards">
            {albums.slice(0, 3).map(album => (
              <AlbumCard key={album.id} album={album}/>
            ))}
          </div>
        </div>

        <FeatureList />

        <div className="parteFinal">
          <h1>Pronto para mergulhar na música?</h1>
          <br />
          <h2>Explore nosso catálogo e encontre seu próximo disco favorito</h2>
          <div className="botaoFinal">
            <a href="/pagProdutos" className="btn-produtos">🎵 Ver todos os produtos</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;