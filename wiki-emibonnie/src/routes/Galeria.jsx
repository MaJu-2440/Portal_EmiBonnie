import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import FiltroSelect from "../components/FiltroSelect"; // Importe o componente acima
import fotosData from "../data/galeria.json"; // Seu JSON plano
import "../css/Galeria.css";

function GaleriaPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. CONFIGURAÇÃO DOS FILTROS (O "Mapa")
  // Se quiser adicionar um filtro novo (ex: Ano), basta adicionar uma linha aqui!
  // 'key': tem que ser IGUAL ao nome no JSON.
  // 'label': é o que aparece escrito na tela.
  const configsFiltros = [
    { key: "projeto", label: "Projeto" },
    { key: "tipo", label: "Tipo de Conteúdo" },
    { key: "episodio", label: "Episódio" },
  ];

  // 2. ESTADO ÚNICO (O "Saco" de filtros)
  // Inicializamos lendo a URL. Se não tiver nada na URL, usa 'todos'.
  const [filtrosAtivos, setFiltrosAtivos] = useState(() => {
    const estadoInicial = {};
    // Para cada config, olha se tem algo na URL correspondente
    configsFiltros.forEach((config) => {
      estadoInicial[config.key] = searchParams.get(config.key) || "todos";
    });
    return estadoInicial;
  });

  // 3. FUNÇÃO GERENTE DE MUDANÇA
  // Atualiza o estado E a URL quando o usuário mexe no select
  const handleMudancaFiltro = (chave, novoValor) => {
    // Atualiza o estado visual
    const novosFiltros = { ...filtrosAtivos, [chave]: novoValor };
    setFiltrosAtivos(novosFiltros);

    // Atualiza a URL (para poder copiar o link)
    const paramsParaUrl = {};
    Object.keys(novosFiltros).forEach((key) => {
      if (novosFiltros[key] !== "todos") {
        paramsParaUrl[key] = novosFiltros[key];
      }
    });
    setSearchParams(paramsParaUrl);
  };

  // 4. LÓGICA DE FILTRAGEM (A Engine)
  const fotosFiltradas = fotosData.filter((foto) => {
    // Verifica todas as configs. Se falhar em uma, a foto é reprovada.
    return configsFiltros.every((config) => {
      const valorFiltro = filtrosAtivos[config.key]; // O que o usuário escolheu
      const valorFoto = foto[config.key]; // O que a foto tem no JSON

      if (valorFiltro === "todos") return true;

      // Conversão para String para garantir que "1" (string) seja igual a 1 (number)
      // E verificamos se o valor da foto não é null (importante para posters)
      return valorFoto !== null && String(valorFoto) === String(valorFiltro);
    });
  });

  return (
    <section key="galeria" className="galeria">
      <h1>Galeria</h1>

      {/* --- ÁREA AUTOMÁTICA DE FILTROS --- */}
      <div className="filtros-wrapper">
        {configsFiltros.map((config) => {
          // Lógica Dinâmica: Pega todas as opções possíveis para ESSA chave específica
          // Ex: Se a chave é "projeto", pega todos os projetos do JSON.
          const opcoesUnicas = [...new Set(fotosData.map((f) => f[config.key]))]
            .filter((val) => val !== null) // Tira nulos
            .sort((a, b) =>
              typeof a === "number" ? a - b : a.localeCompare(b)
            ); // Ordena bonitinho

          return (
            <FiltroSelect
              key={config.key}
              label={config.label}
              valor={filtrosAtivos[config.key]}
              opcoes={opcoesUnicas}
              // Passamos uma função que já sabe QUAL chave está mudando
              aoMudar={(novoValor) =>
                handleMudancaFiltro(config.key, novoValor)
              }
            />
          );
        })}
      </div>

      {/* --- GRID DE RESULTADOS --- */}
      <div className="galeria-grid">
        {fotosFiltradas.length > 0 ? (
          fotosFiltradas.map((foto) => (
            <div key={foto.id} className="foto-card">
              <img src={foto.url} alt={foto.legenda} loading="lazy" />
              <p>{foto.legenda}</p>
              <p>{foto.creditos}</p>
            </div>
          ))
        ) : (
          <p className="aviso-vazio">
            Nenhuma foto encontrada com esses filtros.
          </p>
        )}
      </div>
    </section>
  );
}

export default GaleriaPage;
