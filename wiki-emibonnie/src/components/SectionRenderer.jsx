import React from "react";
import CardEpisodes from "./CardEpisodes";
import Indice from "../components/Indice";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SectionRenderer({ section, indiceList }) {
  const divToggle = (event) => {
    const icon = event.currentTarget;
    const contentDiv = icon.parentElement.nextElementSibling;
    icon.classList.toggle("selected");
    contentDiv.toggleAttribute("hidden");
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  switch (section.type) {
    case "hero":
      return (
        <section id="hero">
          <h1>{section.title}</h1>

          <aside className="details_content">
            {!isMobile && <div className="series-title">{section.title}</div>}

            <figure
              className={isMobile ? "poster_series" : "poster_series-desktop"}
            >
              <img
                src={section.imagem_capa}
                alt={"Capa de " + section.titulo_da_pagina}
              />
            </figure>

            <table className="info_series">
              <tbody>
                {section.details.map((linha) => {
                  return (
                    <tr>
                      <th>{linha.title}</th>
                      <td>{linha.desc}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </aside>

          <div className="text-content">
            <p dangerouslySetInnerHTML={{ __html: section.desc_completa }} />
            <p dangerouslySetInnerHTML={{ __html: section.desc_tecnica }} />
          </div>

          <Indice indiceList={indiceList} />

          <hr />
        </section>
      );

    case "trailer":
      return (
        <section id={section.id}>
          <h2>
            {section.title}
            <i className="fa-solid fa-angle-up" onClick={divToggle}></i>
          </h2>
          <div className="toggle-div">
            <p dangerouslySetInnerHTML={{ __html: section.desc }} />

            <iframe
              src={section.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <hr />
        </section>
      );

    case "galeria":
      return (
        <section id={section.id}>
          <h2>
            {section.title}
            <i className="fa-solid fa-angle-up" onClick={divToggle}></i>
          </h2>
          <div className="toggle-div">
            <div className="btn">
              <Link to={section.link}>Veja a galeria!</Link>
            </div>
          </div>
          <hr />
        </section>
      );

    case "lista_de_episodios":
      if (section.episodios.length > 0 && section.episodios[0] !== "") {
        return (
          <section id={section.id}>
            <h2>
              {section.title}
              <i className="fa-solid fa-angle-up" onClick={divToggle}></i>
            </h2>

            <div className="toggle-div">
              {section.episodios.map((episodio) => (
                <CardEpisodes
                  key={episodio.numero + 100}
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
      } else {
        return (
          <section id={section.id}>
            <h2>
              {section.title}
              <i className="fa-solid fa-angle-up" onClick={divToggle}></i>
            </h2>

            <div>
              <p>Ainda não há nada aqui...</p>
            </div>
            <hr />
          </section>
        );
      }

    case "lista_de_elenco":
      return (
        <section id={section.id}>
          <h2>
            {section.title}
            <i className="fa-solid fa-angle-up" onClick={divToggle}></i>
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
      if (section.trilha_sonora.length > 0) {
        return (
          <section id={section.id}>
            <h2>
              {section.title}
              <i className="fa-solid fa-angle-up" onClick={divToggle}></i>
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
      } else {
        return (
          <section id={section.id}>
            <h2>
              {section.title}
              <i className="fa-solid fa-angle-up" onClick={divToggle}></i>
            </h2>

            <div>
              <p>Ainda não há nada aqui...</p>
            </div>
            <hr />
          </section>
        );
      }

    case "lista_de_links":
      return (
        <section id={section.id}>
          <h2>
            {section.title}
            <i className="fa-solid fa-angle-up" onClick={divToggle}></i>
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
