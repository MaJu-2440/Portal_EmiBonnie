import React from "react";
import { useState } from "react";
import galeriaData from "../data/galeria.json";
import "../css/Galeria.css";

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

  return (
    <div className="pagina-galeria">
      {/* --- ÁREA DE FILTROS --- */}
      <div className="filtros-wrapper">
        {/* Filtro de Projeto */}
        <select
          value={filtroProjeto}
          onChange={(e) => setFiltroProjeto(e.target.value)}
        >
          <option value="todos">Todos os Projetos</option>
          {projetos.map((proj) => (
            <option key={proj} value={proj}>
              {proj.toUpperCase()} {/* Deixa bonitinho em maiúsculo */}
            </option>
          ))}
        </select>

        {/* ... AGORA É COM VOCÊ: FAÇA OS SELECTS DE TIPO E EPISÓDIO ... */}
        {/* Filtro de Tipo */}
        <select
          value={filtroTipo}
          onChange={(e) => setFiltroTipo(e.target.value)}
        >
          <option value="todos">Todos os Tipos</option>
          {tipos.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo.toUpperCase()}
            </option>
          ))}
        </select>

        {/* Filtro de Episódio */}
        <select
          value={filtroEpisodio}
          onChange={(e) => setFiltroEpisodio(e.target.value)}
        >
          <option value="todos">Todos os Episódios</option>
          {episodios.map((ep) => (
            <option key={ep} value={String(ep)}>
              Episódio {ep}
            </option>
          ))}
        </select>
      </div>

      {/* --- GRID DE FOTOS --- */}
      <div className="galeria-grid">
        {fotosFiltradas.map((foto) => (
          <div key={foto.id} className="foto-card">
            <img src={foto.url} alt={foto.legenda} loading="lazy" />
            <p>{foto.legenda}</p>
            <p>{foto.creditos}</p>
          </div>
        ))}

        {/* Dica de UX: Se não sobrou nada, avise o usuário */}
        {fotosFiltradas.length === 0 && (
          <p>Nenhuma foto encontrada com esses filtros.</p>
        )}
      </div>
    </div>
  );
}
