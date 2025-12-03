import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import usData from "../us-data.json";
import moonshadowData from "../moonshadow-data.json";
import SectionRenderer from "../components/SectionRenderer";
import { useParams } from "react-router-dom";

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
            <img src={pageData.imagem_capa} alt="Poster da Série Us" />
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
