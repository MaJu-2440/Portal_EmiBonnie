import React from "react";
import { useEffect, useState } from "react";
import dados from "../data/trabalhos.json";
import { useParams } from "react-router-dom";
import CardTrabalhos from "../components/CardTrabalhos.jsx";

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
    .sort((a, b) => b.ano - a.ano);

  const trabalhosSoloEmi = trabalhosFiltrados
    .filter(
      (item) =>
        item.artistas.includes("emi") && !item.artistas.includes("bonnie"),
    )
    .sort((a, b) => b.ano - a.ano);

  const trabalhosSoloBonnie = trabalhosFiltrados
    .filter(
      (item) =>
        item.artistas.includes("bonnie") && !item.artistas.includes("emi"),
    )
    .sort((a, b) => b.ano - a.ano);

  return (
    <div className="trabalhos-container">
      <h1>
        {filtroTipo === "entrevistas-e-revistas"
          ? "REVISTAS E ENTREVISTAS"
          : filtroTipo.toUpperCase()}
      </h1>

      <div className="secao-trabalhos">
        {trabalhosEmConjunto.length > 0 && <h2>Emi&Bonnie</h2>}
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
      </div>

      <div className="secao-trabalhos">
        {trabalhosSoloEmi.length > 0 && <h2>Emi Solo</h2>}
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
      </div>

      <div className="secao-trabalhos">
        {trabalhosSoloBonnie.length > 0 && <h2>Bonnie Solo</h2>}
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
      </div>
    );
  }
}

export default Trabalhos;
