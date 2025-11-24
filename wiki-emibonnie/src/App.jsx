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
          <section id="principal">
            <h1>{usData.titulo}</h1>

            <aside className="details_content">
              <figure className="poster_series">
                <img src={usData.imagem_capa} alt="Poster da Série Us" />
              </figure>

              <table className="info_series">
                <tbody>
                  <tr>
                    <th>Elenco</th>
                    <td>
                      <a href="#elenco">Veja elenco</a>
                    </td>
                  </tr>
                  <tr>
                    <th>N° de episódios</th>
                    <td>{usData.info_tecnica.numero_episodios}</td>
                  </tr>
                  <tr>
                    <th>Duração média</th>
                    <td>{usData.info_tecnica.duracao_media}</td>
                  </tr>
                  <tr>
                    <th>Exibição</th>
                    <td>
                      <a
                        href="#links"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {usData.info_tecnica.exibicao}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Primeira exibição</th>
                    <td>{usData.info_tecnica.primeira_exibicao}</td>
                  </tr>
                  <tr>
                    <th>Última exibição</th>
                    <td>{usData.info_tecnica.ultima_exibicao}</td>
                  </tr>
                  <tr>
                    <th>Classificação</th>
                    <td>{usData.info_tecnica.classificacao}</td>
                  </tr>
                  <tr>
                    <th>Língua Original</th>
                    <td>{usData.info_tecnica.lingua_original}</td>
                  </tr>
                </tbody>
              </table>
            </aside>

            <p
              dangerouslySetInnerHTML={{ __html: usData.descricao_completa }}
            />
            <p dangerouslySetInnerHTML={{ __html: usData.ficha_tecnica }} />
            <hr />
          </section>

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
