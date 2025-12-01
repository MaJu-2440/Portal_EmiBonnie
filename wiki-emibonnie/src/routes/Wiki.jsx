import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import usData from "../us-data.json";
import moonshadowData from "../moonshadow-data.json";
import SectionRenderer from "../components/SectionRenderer";

// const data = {
//   usData: "us-series",
//   moonshadowData: "moonshadow-series",
//   emiData: "emi-thasorn",
//   bonnieData: "bonnie-pattraphus",
// };

export default function Wiki() {
  return (
    <section className="content_container">
      <section id="principal">
        <h1>{usData.titulo_da_pagina}</h1>

        <aside className="details_content">
          <figure className="poster_series">
            <img src={usData.imagem_capa} alt="Poster da Série Us" />
          </figure>

          <table className="info_series">
            <tbody>
              {usData.details.map((linha) => {
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

        <p dangerouslySetInnerHTML={{ __html: usData.desc_completa }} />
        <p dangerouslySetInnerHTML={{ __html: usData.desc_tecnica }} />
        <hr />
      </section>
      <ErrorBoundary fallback={<div>Ops... Algo deu errado!</div>}>
        {usData.sections.map((section, index) => {
          return <SectionRenderer key={index} {...section} />;
        })}
      </ErrorBoundary>

      {/* <section id="galeria">
            <h2>
              Galeria<i className="fa-solid fa-angle-up"></i>
            </h2>

            <div className="toggle-div">
              <Galeria fotos={usData.galeria} />
            </div>
          </section> */}
    </section>
  );
}
