import React from "react";
import { useState } from "react";
import galeriaData from "../data/galeria.json";

export default function Galeria() {
  const [filtroProjeto, setFiltroProjeto] = useState("todos");
  const [filtroTipo, setFiltroTipo] = useState("todos");
  const [filtroEpisodio, setFiltroEpisodio] = useState("todos");

  const fotosFiltradas = galeriaData.filter((foto) => {
    const passaProjeto =
      filtroProjeto === "todos" || foto.projeto === filtroProjeto;

    const passaTipo = filtroTipo === "todos" || foto.tipo === filtroTipo;

    const passaEpisodio =
      filtroEpisodio === "todos" || String(foto.episodio) === filtroEpisodio;

    return passaProjeto && passaTipo && passaEpisodio;
  });

  // O "Set" garante que não apareça "us" repetido 200 vezes
  const projetos = [...new Set(galeriaData.map((f) => f.projeto))];
  const tipos = [...new Set(galeriaData.map((f) => f.tipo))];

  // Para episódios, é legal ordenar (sort) para não ficar (1, 10, 2)
  // Filtramos 'null' para não aparecer opção vazia se for poster
  const episodios = [...new Set(galeriaData.map((f) => f.episodio))]
    .filter((ep) => ep !== null)
    .sort((a, b) => a - b);

  return <div>Galeria</div>;
}
