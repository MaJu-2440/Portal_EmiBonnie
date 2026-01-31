import React, { useEffect, useState } from "react";
import perfilBonnie from "../data/perfil-bonnie.json";
import perfilEmi from "../data/perfil-emi.json";
import CardTrabalhos from "../components/CardTrabalhos";
import ScrollBtn from "../components/ScrollBtn";
import { Link, useParams } from "react-router-dom";
import trabalhos from "../data/trabalhos.json";
import Indice from "../components/Indice";

const dados = [perfilEmi, perfilBonnie];

function Perfil() {
  const { nome } = useParams();
  const [perfilAtivo, setPerfilAtivo] = useState(nome);

  useEffect(() => {
    setPerfilAtivo(nome);
  }, [nome]);

  const perfilData = dados.find((d) => d.id === perfilAtivo);
  const premios = dados.find((d) => d.premios)?.premios || [];
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

  const pageData = [
    { title: "Perfil", id: "perfil" },
    { title: "Características", id: "caracteristicas" },
    { title: "Curiosidades", id: "curiosidades" },
    { title: "Prêmios", id: "premios" },
    { title: "Trabalhos", id: "trabalhos" },
    { title: perfilData.marca?.nome, id: "marca" },
    { title: "Redes Sociais", id: "redes-sociais" },
  ];

  const indiceList = pageData.map((section) => ({
    title: section.title,
    id: section.id,
  }));

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="perfil-container">
      <section id="perfil" className={`hero ${perfilData.id}`}>
        {isMobile && (
          <img
            src={`/img/bg_img/capa-perfil_${perfilData?.id}_mobile.png`}
            alt="Capa Hero"
          />
        )}
        {!isMobile && (
          <img
            src={`/img/bg_img/capa-perfil_${perfilData?.id}_desktop.png`}
            alt="Capa Hero"
          />
        )}

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

      <section id="caracteristicas" className={`perfil ${perfilData.id}`}>
        <h2>Características</h2>
        <ul className="perfil-lista">
          <li>
            <strong>Apelido:</strong> {perfilData.apelido}
          </li>
          <li>
            <strong>Nome Completo:</strong> {perfilData.nome_completo}
          </li>
          <li>
            <strong>Nome em Tailandês:</strong> {perfilData.nome_tailandes}
          </li>
          <li>
            <strong>Nascimento:</strong> {perfilData.nascimento} (
            {Math.floor(
              (new Date() - new Date(perfilData.nascimento).getTime()) /
                3.15576e10,
            )}{" "}
            anos)
          </li>
          <li>
            <strong>Altura:</strong> {perfilData.altura}
          </li>
          <li>
            <strong>Signo:</strong> {perfilData.signo}
          </li>
          <li>
            <strong>Ocupação:</strong> {perfilData.ocupacao}
          </li>
          <li>
            <strong>Educação:</strong> {perfilData.educacao?.high_school}
          </li>
          <li>
            <strong>Superior:</strong> {perfilData.educacao?.curso} na{" "}
            {perfilData.educacao?.universidade}
          </li>
        </ul>
      </section>

      <section
        id="curiosidades"
        className={`perfil-curiosidades ${perfilData.id}`}
      >
        <h2>Curiosidades</h2>
        <ul className="perfil-lista">
          <li>
            <strong>Comidas Favoritas:</strong>{" "}
            {perfilData.curiosidades?.comidas}
          </li>
          <li>
            <strong>Alergias:</strong> {perfilData.curiosidades?.alergias}
          </li>
          <li>
            <strong>Cores Favoritas:</strong>{" "}
            {perfilData.curiosidades?.cores_fav}
          </li>
          <li>
            <strong>Hobbies:</strong> {perfilData.curiosidades?.hobbies}
          </li>
        </ul>
      </section>

      <section id="premios" className="perfil-premios">
        <h2 className="tipo-trabalho">Prêmios</h2>
        <div className="premios-card-container">
          {premiosFiltrados.map((premio) => {
            return <CardTrabalhos item={premio} />;
          })}
        </div>
      </section>

      <section id="trabalhos" className={`perfil-trabalhos ${perfilData.id}`}>
        <h2>Trabalhos</h2>

        <div className="perfil-trabalhos_secao">
          <h3>Filmografia</h3>
          <ul>
            {filmografia.map((item) => {
              return (
                <li key={item.projeto_id}>
                  <Link
                    to={`/trabalhos/filmografia?projeto_id=${item.projeto_id}`}
                  >
                    {item.titulo} ({item.ano})
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {discografia.length > 0 && (
          <div className="perfil-trabalhos_secao">
            <h3>Discografia</h3>
            <ul>
              {discografia.map((item) => {
                return (
                  <li key={item.projeto_id}>
                    <Link
                      to={`/trabalhos/discografia?projeto_id=${item.projeto_id}`}
                    >
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
            <h3>Revistas e Entrevistas</h3>
            <ul>
              {revistas.map((item) => {
                return (
                  <li key={item.projeto_id}>
                    <Link
                      to={`/trabalhos/entrevistas-e-revistas?projeto_id=${item.projeto_id}`}
                    >
                      {item.titulo} ({item.ano})
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </section>

      <section id="marca" className="perfil-marca">
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

      <section id="redes-sociais" className="perfil-footer">
        <h2>Acompanhe nas redes sociais!</h2>

        <h3>{perfilData.social?.nome}</h3>
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

        <div className="perfil_redes-sociais_container fanbase">
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
                <a
                  href={value?.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </div>
            );
          })}
        </div>
      </section>
      {isMobile && <Indice indiceList={indiceList} />}

      <ScrollBtn />
    </div>
  );
}

export default Perfil;
