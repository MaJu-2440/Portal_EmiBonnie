import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Portal EmiBonnie</h1>
        <p>
          <strong>Atenção:</strong> Este é um projeto não-oficial, feito de fã
          para fãs. O site e seu conteúdo não possuem nenhuma afiliação com a
          GMMTV, as artistas ou qualquer instituição oficial.
        </p>
        <p>
          Este projeto é um fansite dedicado a centralizar informações, notícias
          e mídias sobre as atrizes tailandesas Emi Thasorn e Bonnie Pattraphus,
          e seus trabalhos.
        </p>
        <p>
          O principal objetivo é criar um espaço completo e organizado de
          consulta para a comunidade de fãs.
        </p>
        <br />
        <h4>Status: Em desenvolvimento...</h4>
        <br />
        <h4>Páginas acessáveis:</h4>
        <ul>
          <li>
            <Link to={"/"}>Página principal</Link>
          </li>
          <li>
            <Link to={"/wiki/us-series"}>Wiki de Us the Series</Link>
          </li>
          <li>
            <Link to={"/wiki/moonshadow-series"}>
              Wiki de Moonshadow the Series
            </Link>
          </li>
          <li>
            <Link to={"/galeria/todos"}>Galeria</Link>
          </li>
        </ul>
        <br />
      </div>
    </div>
  );
}
