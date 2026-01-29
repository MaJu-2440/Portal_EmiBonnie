import React from "react";
import { useEffect, useState } from "react";
import dados from "../data/trabalhos.json";
import { useParams } from "react-router-dom";
import CardTrabalhos from "../components/CardTrabalhos.jsx";
import ScrollBtn from "../components/ScrollBtn.jsx";

function Trabalhos() {
  const { tipo } = useParams();
  const [filtroTipo, setFiltroTipo] = useState(tipo || "todos");

  useEffect(() => {
    setFiltroTipo(tipo);
  }, [tipo]);

  var tiposTrabalhosFiltrados = [];
  const trabalhosFiltrados = dados.filter((item) => {
    if (filtroTipo == "entrevistas-e-revistas") {
      tiposTrabalhosFiltrados = ["entrevista", "revista"];
      return tiposTrabalhosFiltrados.includes(item.tipo);
    } else if (filtroTipo == "discografia") {
      tiposTrabalhosFiltrados = ["musica", "musical"];
      return tiposTrabalhosFiltrados.includes(item.tipo);
    } else if (filtroTipo == "filmografia") {
      tiposTrabalhosFiltrados = ["filme", "serie", "mv"];
      return tiposTrabalhosFiltrados.includes(item.tipo);
    } else if (filtroTipo == "tv-shows") {
      tiposTrabalhosFiltrados = ["tvshow"];
      return tiposTrabalhosFiltrados.includes(item.tipo);
    } else {
      return "Nenhum trabalho encontrado";
    }
  });

  const trabalhosEmConjunto = trabalhosFiltrados
    .filter(
      (item) =>
        item.artistas.includes("emi") && item.artistas.includes("bonnie"),
    )
    .reverse()
    .sort((a, b) => b.ano - a.ano);

  const trabalhosSoloEmi = trabalhosFiltrados
    .filter(
      (item) =>
        item.artistas.includes("emi") && !item.artistas.includes("bonnie"),
    )
    .reverse()
    .sort((a, b) => b.ano - a.ano);

  const trabalhosSoloBonnie = trabalhosFiltrados
    .filter(
      (item) =>
        item.artistas.includes("bonnie") && !item.artistas.includes("emi"),
    )
    .reverse()
    .sort((a, b) => b.ano - a.ano);

  return (
    <div className="trabalhos-container">
      <div
        className="capa-trabalhos capa-trabalhos_emibonnie"
        aria-label="Capa da Seção de Trabalhos Conjuntos de Emi e Bonnie"
      >
        <h1>
          {filtroTipo === "entrevistas-e-revistas"
            ? "REVISTAS E ENTREVISTAS"
            : filtroTipo.toUpperCase()}
        </h1>
      </div>

      <div className="secao-trabalhos">
        {trabalhosEmConjunto.length > 0 && (
          <div>
            {tiposTrabalhosFiltrados.map((item) => {
              return secaoTrabalhos({
                titulo: item.toUpperCase(),
                lista: trabalhosEmConjunto.filter(
                  (trabalho) => trabalho.tipo === item,
                ),
              });
            })}
          </div>
        )}
      </div>

      {trabalhosSoloEmi.length > 0 && (
        <div
          className="capa-trabalhos capa-trabalhos_emi"
          aria-label="Capa da Seção de Trabalhos Solo de Emi"
        ></div>
      )}

      <div className="secao-trabalhos">
        {trabalhosSoloEmi.length > 0 && (
          <div>
            {tiposTrabalhosFiltrados.map((item) => {
              return secaoTrabalhos({
                titulo: item.toUpperCase(),
                lista: trabalhosSoloEmi.filter(
                  (trabalho) => trabalho.tipo === item,
                ),
              });
            })}
          </div>
        )}
      </div>
      {trabalhosSoloBonnie.length > 0 && (
        <div
          className="capa-trabalhos capa-trabalhos_bonnie"
          aria-label="Capa da Seção de Trabalhos Solo de Bonnie"
        ></div>
      )}

      <div className="secao-trabalhos">
        {trabalhosSoloBonnie.length > 0 && (
          <div>
            {tiposTrabalhosFiltrados.map((item) => {
              return secaoTrabalhos({
                titulo: item.toUpperCase(),
                lista: trabalhosSoloBonnie.filter(
                  (trabalho) => trabalho.tipo === item,
                ),
              });
            })}
          </div>
        )}
      </div>
    </div>
  );

  function secaoTrabalhos({ titulo, lista }) {
    if (lista.length === 0) {
      return null;
    }

    return (
      <div className="secao-trabalhos">
        <h2 className="tipo-trabalho">{titulo}</h2>
        <div className="trabalhos-card-container">
          {lista.map((trabalho) => {
            return <CardTrabalhos item={trabalho} />;
          })}
        </div>
        <ScrollBtn />
      </div>
    );
  }
}

export default Trabalhos;
