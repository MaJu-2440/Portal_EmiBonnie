import React, { useEffect, useState } from "react";
import perfilBonnie from "../data/perfil-bonnie.json";
import perfilEmi from "../data/perfil-emi.json";
import CardTrabalhos from "../components/CardTrabalhos";
import ScrollBtn from "../components/ScrollBtn";
import { Link, useParams } from "react-router-dom";
import trabalhos from "../data/trabalhos.json";

const dados = [perfilEmi, perfilBonnie];

function Perfil() {
  const { nome } = useParams();
  const [perfilAtivo, setPerfilAtivo] = useState(nome);

  useEffect(() => {
    setPerfilAtivo(nome);
  }, [nome]);

  let perfilArray = [];
  for (let dataArray of dados) {
    if (Array.isArray(dataArray)) {
      const found = dataArray.find((d) => d.id === perfilAtivo);
      if (found) {
        perfilArray = dataArray;
        break;
      }
    }
  }

  const perfilData = perfilArray.find((d) => d.id === perfilAtivo);
  const premios = perfilArray.find((d) => d.premios)?.premios || [];
  const premiosFiltrados = premios.filter((t) => t.tipo === "premio");

  // Extrai a primeira parte do ID (emi ou bonnie)
  const artistaNome = perfilAtivo?.split("-")[0];

  const trabalhosFiltrados = trabalhos.filter((t) =>
    t.artistas.includes(artistaNome),
  );

  const filmografia = trabalhosFiltrados.filter(
    (t) => t.tipo === "filme" || t.tipo === "serie",
  );

  const discografia = trabalhosFiltrados.filter(
    (t) => t.tipo === "musica" || t.tipo === "musical",
  );

  const revistas = trabalhosFiltrados.filter((t) => t.tipo === "revista");

  return (
    <div className="perfil-container">
      <section className="hero">
        <img
          src={`/img/bg_img/capa-perfil_${perfilData?.id}_mobile.png`}
          alt="Capa Bonnie Pattraphus"
        />
        <div
          className="hero_descricao"
          dangerouslySetInnerHTML={{ __html: perfilData.bio }}
        />
        <div className="perfil_redes-sociais">
          <a
            href={perfilData.social?.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href={perfilData.social?.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href={perfilData.social?.tiktok}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </section>

      <section className="perfil">
        <h2>Características</h2>
        <ul className="perfil-lista">
          <li>Apelido: {perfilData.apelido}</li>
          <li>Nome Completo: {perfilData.nome_completo}</li>
          <li>Nome em Tailandês: {perfilData.nome_tailandes}</li>
          <li>
            Nascimento: {perfilData.nascimento} (
            {Math.floor(
              (new Date() - new Date(perfilData.nascimento).getTime()) /
                3.15576e10,
            )}{" "}
            anos)
          </li>
          <li>Altura: {perfilData.altura}</li>
          <li>Signo: {perfilData.signo}</li>
          <li>Ocupação: {perfilData.ocupacao}</li>
          <li>Educação: {perfilData.educacao?.high_school}</li>
          <li>
            Superior: {perfilData.educacao?.curso} na{" "}
            {perfilData.educacao?.universidade}
          </li>
        </ul>
      </section>

      <section className="perfil perfil-curiosidades">
        <h2>Curiosidades</h2>
        <ul className="perfil-lista">
          <li>Comidas Favoritas: {perfilData.curiosidades?.comidas}</li>
          <li>Alergias: {perfilData.curiosidades?.alergias}</li>
          <li>Cores Favoritas: {perfilData.curiosidades?.cores_fav}</li>
          <li>Hobbies: {perfilData.curiosidades?.hobbies}</li>
        </ul>
      </section>

      <section className="perfil-premios">
        <div className="secao-premios">
          <h2 className="tipo-trabalho">Prêmios</h2>
          <div className="premios-card-container">
            {premiosFiltrados.map((premio) => {
              return <CardTrabalhos item={premio} />;
            })}
          </div>
        </div>
      </section>

      <section className="perfil perfil-trabalhos">
        <h2>Trabalhos</h2>

        <div className="perfil-trabalhos_secao">
          <h3>Filmografia</h3>
          <ul>
            {filmografia.map((item) => {
              return (
                <li key={item.projeto_id}>
                  <Link to={item.projeto_id}>
                    {item.titulo} ({item.ano})
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {discografia.length > 0 && (
          <div className="perfil-trabalhos_secao">
            <h3>Discogradia</h3>
            <ul>
              {discografia.map((item) => {
                return (
                  <li key={item.projeto_id}>
                    <Link to={item.projeto_id}>
                      {item.titulo} ({item.ano})
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {revistas.length > 0 && (
          <div className="perfil-trabalhos_secao">
            <h3>Revistas</h3>
            <ul>
              {revistas.map((item) => {
                return (
                  <li key={item.projeto_id}>
                    <Link to={item.projeto_id}>
                      {item.titulo} ({item.ano})
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </section>

      <section className="perfil perfil-marca">
        <h2>
          {perfilData.marca?.nome}
          <br />
          <span>{perfilData.marca?.handle}</span>
        </h2>
        <h3>{perfilData.marca?.slogan}</h3>
        <p>{perfilData.marca?.colecao}</p>
        <div className="perfil_redes-sociais marca">
          <a
            href={perfilData.marca?.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href={perfilData.marca?.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </section>

      <section className="perfil perfil-footer">
        <h2>Acompanhe muito mais nas redes sociais!</h2>

        <h3>{perfilData.social?.nome}</h3>
        <div className="perfil_redes-sociais fanbase">
          <a
            href={perfilData.social?.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href={perfilData.social?.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href={perfilData.social?.tiktok}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>

        {Object.values(perfilData.fanbase).map((value) => {
          return (
            <div className="perfil_redes-sociais">
              <h3>{value.nome}</h3>
              <a
                href={value?.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href={value?.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href={value?.tiktok} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          );
        })}
      </section>

      <ScrollBtn />
    </div>
  );
}

export default Perfil;
