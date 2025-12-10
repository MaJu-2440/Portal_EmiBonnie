import React from "react";

export default function Carrossel({ fotos }) {
  if (fotos.length === 0) return null; // Não mostra carrossel vazio

  return (
    <div className="carrossel-scroll">
      {fotos.map((foto) => (
        <div key={foto.id} className="carrossel-item">
          {/* O segredo: Altura fixa, largura automática */}
          <img src={foto.url} alt={foto.legenda} />
          <p className="legenda">{foto.legenda}</p>
          <span className="creditos">{foto.creditos}</span>
        </div>
      ))}
    </div>
  );
}
