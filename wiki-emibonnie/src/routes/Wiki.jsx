import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";
import usData from "../data/us-data.json";
import moonshadowData from "../data/moonshadow-data.json";
import SectionRenderer from "../components/SectionRenderer";

const bancoDeDados = [usData, moonshadowData];

export default function Wiki() {
  const { slug } = useParams();
  const pageData = bancoDeDados.find((dados) => dados.slug === slug);

  return (
    <section className="content_container">
      <section id="principal">
        <h1>{pageData.titulo_da_pagina}</h1>

        <aside className="details_content">
          <figure className="poster_series">
            <img
              src={pageData.imagem_capa}
              alt={"Capa de " + pageData.titulo_da_pagina}
            />
          </figure>

          <table className="info_series">
            <tbody>
              {pageData.details.map((linha) => {
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

        <p dangerouslySetInnerHTML={{ __html: pageData.desc_completa }} />
        <p dangerouslySetInnerHTML={{ __html: pageData.desc_tecnica }} />
        <hr />
      </section>
      <ErrorBoundary fallback={<div>Ops... Algo deu errado!</div>}>
        {pageData.sections.map((section, index) => {
          return <SectionRenderer key={index} {...section} />;
        })}
      </ErrorBoundary>
    </section>
  );
}
