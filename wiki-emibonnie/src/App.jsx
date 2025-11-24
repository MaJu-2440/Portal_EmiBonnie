import "./App.css";
import usData from "./us-data.json";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CardEpisodes from "./components/CardEpisodes.jsx";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <section class="content_container">
          <h1>Minha Wiki Emibonnie</h1>
          <p>Migração iniciada!</p>

          <section id="episodios">
            <h2>
              Episódios<i className="fa-solid fa-angle-up"></i>
            </h2>

            <div className="toggle-div">
              {usData.episodios.map((episodios) => (
                <CardEpisodes
                  key={episodios.numero}
                  numero={episodios.numero}
                  titulo={episodios.titulo}
                  sinopse={episodios.sinopse}
                  data_exibicao={episodios.data_exibicao}
                  imagem={episodios.imagem}
                />
              ))}
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
