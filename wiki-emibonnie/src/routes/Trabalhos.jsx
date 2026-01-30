import React from "react";
import { useEffect, useState } from "react";
import dados from "../data/trabalhos.json";
import { useParams } from "react-router-dom";
import CardTrabalhos from "../components/CardTrabalhos.jsx";
import ScrollBtn from "../components/ScrollBtn.jsx";

function Trabalhos() {
  const { tipo } = useParams();
  const [filtroTipo, setFiltroTipo] = useState(tipo || "todos");
  const [busca, setBusca] = useState(""); // O que digitar na barra

  const limparTudo = () => {
    setBusca("");
  };

  useEffect(() => {
    setFiltroTipo(tipo || "todos");
  }, [tipo]);

  var tiposTrabalhosFiltrados = [];
  const trabalhosFiltrados = dados.filter((item) => {
    if (filtroTipo === "entrevistas-e-revistas") {
      tiposTrabalhosFiltrados = ["entrevista", "revista"];
      return tiposTrabalhosFiltrados.includes(item.tipo);
    } else if (filtroTipo === "discografia") {
      tiposTrabalhosFiltrados = ["musica", "musical"];
      return tiposTrabalhosFiltrados.includes(item.tipo);
    } else if (filtroTipo === "filmografia") {
      tiposTrabalhosFiltrados = ["filme", "serie", "mv"];
      return tiposTrabalhosFiltrados.includes(item.tipo);
    } else if (filtroTipo === "tv-shows") {
      tiposTrabalhosFiltrados = ["tvshow"];
      return tiposTrabalhosFiltrados.includes(item.tipo);
    } else if (!filtroTipo || filtroTipo === "todos") {
      tiposTrabalhosFiltrados = Array.from(new Set(dados.map((d) => d.tipo)));
      return true;
    } else {
      return false;
    }
  });

  const trabalhosDaBusca = busca
    ? trabalhosFiltrados.filter(
        (item) =>
          item.titulo.toLowerCase().includes(busca.toLowerCase()) ||
          item.tipo.toLowerCase().includes(busca.toLowerCase()),
      )
    : trabalhosFiltrados;

  const trabalhosEmConjunto = trabalhosDaBusca
    .filter(
      (item) =>
        item.artistas.includes("emi") && item.artistas.includes("bonnie"),
    )
    .reverse()
    .sort((a, b) => b.ano - a.ano);

  const trabalhosSoloEmi = trabalhosDaBusca
    .filter(
      (item) =>
        item.artistas.includes("emi") && !item.artistas.includes("bonnie"),
    )
    .reverse()
    .sort((a, b) => b.ano - a.ano);

  const trabalhosSoloBonnie = trabalhosDaBusca
    .filter(
      (item) =>
        item.artistas.includes("bonnie") && !item.artistas.includes("emi"),
    )
    .reverse()
    .sort((a, b) => b.ano - a.ano);

  return (
    <div className="trabalhos-container">
      <div className="controles filtro-pesquisa">
        <div className="nav-btns">
          <a className="nav-btn" href="#trabalhosEmiBonnie">
            Emi&Bonnie
          </a>
          <a className="nav-btn" href="#trabalhosEmi">
            Emi
          </a>
          <a className="nav-btn" href="#trabalhosBonnie">
            Bonnie
          </a>
        </div>
        <input
          name="busca"
          type="text"
          placeholder="Pesquisar..."
          onChange={(e) => setBusca(e.target.value)}
          value={busca}
        />
        {busca !== "" && (
          <button onClick={limparTudo} className="btn-limpar">
            Limpar filtros <i className="fa-solid fa-trash"></i>
          </button>
        )}
      </div>
      <h1>
        {filtroTipo === "entrevistas-e-revistas"
          ? "REVISTAS E ENTREVISTAS"
          : filtroTipo.toUpperCase()}
      </h1>

      {trabalhosEmConjunto.length === 0 &&
        trabalhosSoloEmi.length === 0 &&
        trabalhosSoloBonnie.length === 0 && (
          <p className="nenhum-trabalho">Nenhum trabalho encontrado.</p>
        )}

      {trabalhosEmConjunto.length > 0 && (
        <div
          id="trabalhosEmiBonnie"
          className="capa-trabalhos capa-trabalhos_emibonnie"
          aria-label="Capa da Seção de Trabalhos Conjuntos de Emi e Bonnie"
        ></div>
      )}

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
          id="trabalhosEmi"
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
          id="trabalhosBonnie"
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
