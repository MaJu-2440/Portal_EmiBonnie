import React, { useState } from "react";
import "../css/Galeria.css"; // Vamos criar esse CSS no passo 2

function Galeria({ fotos }) {
  // Estado que guarda o índice da foto atual (começa na 0)
  const [indiceAtual, setIndiceAtual] = useState(0);

  // Lógica para ir para a próxima
  const proximaFoto = () => {
    // Se estiver na última, volta para a primeira (0), senão soma 1
    if (indiceAtual === fotos.length - 1) {
      setIndiceAtual(0);
    } else {
      setIndiceAtual(indiceAtual + 1);
    }
  };

  // Lógica para voltar
  const fotoAnterior = () => {
    // Se estiver na primeira, vai para a última, senão subtrai 1
    if (indiceAtual === 0) {
      setIndiceAtual(fotos.length - 1);
    } else {
      setIndiceAtual(indiceAtual - 1);
    }
  };

  // Se não houver fotos, não renderiza nada para não dar erro
  if (!fotos || fotos.length === 0) return null;

  return (
    <div className="carousel-container">
      {/* A Imagem Atual */}
      <div className="carousel-display">
        <img
          src={fotos[indiceAtual].url}
          alt={fotos[indiceAtual].legenda}
          className="carousel-img"
        />

        {/* Legenda sobreposta */}
        <div className="carousel-caption">
          <p>{fotos[indiceAtual].legenda}</p>
        </div>
      </div>

      {/* Botões de Controle */}
      <button onClick={fotoAnterior} className="btn-nav btn-left">
        ❮
      </button>
      <button onClick={proximaFoto} className="btn-nav btn-right">
        ❯
      </button>

      {/* Indicadores (bolinhas) opcionais */}
      <div className="indicadores">
        {fotos.map((_, idx) => (
          <span
            key={idx}
            className={idx === indiceAtual ? "bolinha ativa" : "bolinha"}
            onClick={() => setIndiceAtual(idx)} // Clicar na bolinha vai pra foto
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Galeria;
