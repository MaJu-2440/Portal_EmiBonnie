import React from "react";
import CardEpisodes from "./CardEpisodes";

export default function SectionRenderer(section) {
  switch (section.type) {
    case "texto_e_url":
      return (
        <section>
          <h2>
            {section.title}
            <i className="fa-solid fa-angle-up"></i>
          </h2>
          <div className="toggle-div">
            <p dangerouslySetInnerHTML={{ __html: section.desc }} />
          </div>
          <div className="btn">
            <a href={section.url} target="_blank" rel="noopener noreferrer">
              Assista ao trailer
            </a>
          </div>
          <hr />
        </section>
      );

    case "lista_de_episodios":
      return (
        <section>
          <h2>
            {section.title}
            <i className="fa-solid fa-angle-up"></i>
          </h2>

          <div className="toggle-div">
            {section.episodios.map((episodio) => (
              <CardEpisodes
                key={episodio.numero}
                numero={episodio.numero}
                titulo={episodio.titulo}
                sinopse={episodio.sinopse}
                data_exibicao={episodio.data_exibicao}
                imagem={episodio.imagem}
              />
            ))}
          </div>
          <hr />
        </section>
      );

    case "lista_de_elenco":
      return (
        <section>
          <h2>
            {section.title}
            <i className="fa-solid fa-angle-up"></i>
          </h2>

          <div className="toggle-div">
            <ul className="lista">
              {section.elenco.map((item, index) => (
                <li key={index}>
                  {item.ator} como {item.personagem}
                </li>
              ))}
            </ul>
          </div>

          <hr />
        </section>
      );

    case "tabela_de_trilha_sonora":
      return (
        <section>
          <h2>
            {section.title}
            <i className="fa-solid fa-angle-up"></i>
          </h2>

          <div className="toggle-div">
            <table className="tabela_trilha">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Artista(s)</th>
                  <th>Referência</th>
                </tr>
              </thead>
              <tbody>
                {section.trilha_sonora.map((item, index) => (
                  <tr key={index}>
                    <td>{item.titulo}</td>
                    <td>{item.artista}</td>
                    <td>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        YouTube
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <hr />
        </section>
      );

    case "lista_de_links":
      return (
        <section>
          <h2>
            {section.title}
            <i className="fa-solid fa-angle-up"></i>
          </h2>

          <div className="toggle-div">
            <ul className="lista">
              {section.links.map((link, index) => {
                return (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.nome}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <hr />
        </section>
      );

    default:
      return (
        <section>
          <p>Não há nada aqui ainda...</p>
        </section>
      );
  }
}
