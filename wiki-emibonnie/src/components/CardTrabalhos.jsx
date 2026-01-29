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
          {item.detalhes?.papel && <span>como {item.detalhes.papel}</span>}
        </div>

        {item.detalhes?.legendas && (
          <span
            className="card-detalhe"
            style={{ color: "var(--destaque-secundario)" }}
          >
            *{item.detalhes.legendas}
          </span>
        )}
        {item.detalhes?.hashtag && (
          <span className="card-detalhe">{item.detalhes.hashtag}</span>
        )}

        <div className="card-trabalho_links">
          {item.categoria === "video" && item.url && (
            <a href={item.url} target="_blank">
              Ver Mais
            </a>
          )}
          {item.categoria === "galeria" && (
            <Link to={item.url}>Ver Galeria</Link>
          )}
          {item.detalhes?.link_artigo && (
            <a
              className="link-externo"
              href={item.detalhes.link_artigo}
              target="_blank"
            >
              Artigo
            </a>
          )}
          {item.detalhes?.link_video && (
            <a
              className="link-externo"
              href={item.detalhes.link_video}
              target="_blank"
            >
              Vídeo Relacionado
            </a>
          )}
          {item.detalhes?.link_wiki && (
            <Link className="link-externo" to={item.detalhes.link_wiki}>
              Ver Wiki
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
