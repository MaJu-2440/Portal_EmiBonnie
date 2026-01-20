import React from "react";
import { Link } from "react-router-dom";
import "../estilos/cardTrabalhos.css";

export default function CardTrabalhos({ item }) {
  return (
    <div className="card-trabalho">
      <img src={`/img/trabalhos_${item.tipo}/${item.capa}`} alt={item.titulo} />
      <div className="card-trabalho_info">
        <span>{item.tipo.toUpperCase()}</span>

        <h3>
          {item.titulo} ({item.detalhes?.data_especifica || item.ano})
        </h3>

        <div className="card-trabalho_artistas">
          {item.artistas.map((artista) => (
            <span>{artista.charAt(0).toUpperCase() + artista.slice(1)} </span>
          ))}
        </div>

        {item.detalhes?.papel && <span>como {item.detalhes.papel}</span>}
        {item.detalhes?.legendas && (
          <span style={{ color: "var(--destaque-secundario)" }}>
            {item.detalhes.legendas}
          </span>
        )}
        {item.detalhes?.hashtag && <span>{item.detalhes.hashtag}</span>}
        {item.categoria === "video" && (
          <a href={item.url} target="_blank">
            Ver Mais
          </a>
        )}
        {item.categoria === "galeria" && <Link to={item.url}>Ver Galeria</Link>}
      </div>
    </div>
  );
}
