import React from "react";
import { useState } from "react";
import fotosData from "../data/galeria.json";
import "../css/galeria.css";
import Carrossel from "../components/Carrossel.jsx";

export default function Galeria() {
  const [filtroAtivo, setFiltroAtivo] = useState("todos"); // 'us', 'moonshadow', 'revistas', 'entrevistas'
  const [busca, setBusca] = useState(""); // O que digitar na barra

  // 1. PRIMEIRO FILTRO: O Projeto (Aba Superior)
  // Pega só o que é de "Us", ou só "Revistas"
  const fotosDoProjeto = fotosData.filter(
    (foto) => foto.projeto === filtroAtivo
  );

  // 2. SEGUNDO FILTRO: A Barra de Pesquisa
  // Se tiver algo escrito, filtra pela legenda. Se não, passa tudo.
  const fotosDaBusca =
    filtroAtivo === "todos"
      ? fotosData.filter((foto) =>
          foto.legenda.toLowerCase().includes(busca.toLowerCase())
        )
      : fotosDoProjeto.filter((foto) =>
          foto.legenda.toLowerCase().includes(busca.toLowerCase())
        );

  // 3. AGRUPAMENTO (O Pulo do Gato)
  // Vamos transformar a lista solta em um Objeto de Grupos
  // Resultado esperado: { "Episódio 1": [...fotos], "Episódio 2": [...fotos] }
  const grupos = {};

  fotosDaBusca.forEach((foto) => {
    // Define o nome do grupo.
    // Se for episódio, usa "Episódio X". Se não tiver ep, usa o "tipo" (ex: Poster).
    const nomeGrupo = foto.episodio
      ? `Episódio ${foto.episodio}`
      : foto.tipo.toUpperCase();

    // Se a gaveta não existe, cria ela
    if (!grupos[nomeGrupo]) {
      grupos[nomeGrupo] = [];
    }

    // Joga a foto na gaveta certa
    grupos[nomeGrupo].push(foto);
  });

  // 2. Crie a lista de chaves ordenada
  const secoesOrdenadas = Object.keys(grupos).sort((a, b) => {
    // Passo B: Ordenação Natural (O segredo para Ep 1, Ep 2, Ep 10)
    // O 'numeric: true' faz o computador entender que 10 é maior que 2
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: "base",
    });
  });

  return (
    <div className="galeria">
      {/* CONTROLES */}
      <div className="controles">
        <div className="botoes-topo">
          <button onClick={() => setFiltroAtivo("todos")}>Todos</button>
          <button onClick={() => setFiltroAtivo("us")}>Us The Series</button>
          <button onClick={() => setFiltroAtivo("moonshadow")}>
            Moonshadow
          </button>
        </div>

        <input
          type="text"
          placeholder="Pesquisar cena..."
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {/* LISTA DE CARROSSÉIS */}
      <div className="lista-secoes">
        {/* Object.keys pega ["Episódio 1", "Episódio 2"...] */}
        {secoesOrdenadas.map((tituloDoGrupo) => (
          <div key={tituloDoGrupo} className="secao-carrossel">
            <h3>{tituloDoGrupo}</h3>

            {/* Aqui entra aquele componente Carrossel.jsx com CSS Scroll Snap */}
            {/* Passamos apenas as fotos DESSA gaveta específica */}
            <Carrossel fotos={grupos[tituloDoGrupo]} />
          </div>
        ))}

        {/* Feedback se a busca não achar nada */}
        {secoesOrdenadas.length === 0 && <p>Nada encontrado.</p>}
      </div>
    </div>
  );
}
