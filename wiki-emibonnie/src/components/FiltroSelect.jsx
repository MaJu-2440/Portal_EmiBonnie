import React from "react";

function FiltroSelect({ label, valor, opcoes, aoMudar }) {
  return (
    <div className="filtro-item">
      <label>{label}:</label>
      <select
        value={valor}
        onChange={(e) => aoMudar(e.target.value)}
        className="filtro-select"
      >
        <option value="todos">Todos</option>

        {opcoes.map((opcao) => (
          <option key={opcao} value={opcao}>
            {/* Se for número, mostra normal. Se for texto, deixa maiúsculo bonito */}
            {typeof opcao === "string" ? opcao.toUpperCase() : opcao}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FiltroSelect;
