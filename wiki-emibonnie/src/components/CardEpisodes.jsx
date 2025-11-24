import React from "react";

export default function SerieEpisodes({
  numero,
  titulo,
  sinopse,
  data_exibicao,
  imagem,
}) {
  return (
    <details key={numero}>
      <summary>
        <strong>
          EP{String(numero).padStart(2, "0")}: {titulo}
        </strong>
      </summary>

      <div className="episodio_container">
        <figure className="episodio_poster">
          <img src={imagem} />
        </figure>

        <div>
          <p>{sinopse}</p>
          <small>Estreia: {data_exibicao}</small>
        </div>
      </div>
    </details>
  );
}
