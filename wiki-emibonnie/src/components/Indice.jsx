import React, { useState, useEffect } from "react";

export default function Indice({ indiceList }) {
  const [isIndiceOpen, setIndiceOpen] = useState(false);

  const handleIndice = () => {
    setIndiceOpen(!isIndiceOpen);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIndiceOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!Array.isArray(indiceList)) return null;

  return isMobile ? (
    <div className="indice-btn" title="Índice">
      <div className={isIndiceOpen ? "indice-icons toggle" : "indice-icons"}>
        {isIndiceOpen ? (
          <i className="fa-solid fa-xmark" onClick={handleIndice}></i>
        ) : (
          <i className="fa-solid fa-list" onClick={handleIndice}></i>
        )}
      </div>

      <nav className={isIndiceOpen ? "indice ativo open" : "indice ativo"}>
        <h2>Índice</h2>
        <ol>
          {indiceList.map(({ title, id }) => {
            return (
              <li>
                <a href={"#" + id}>{title}</a>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  ) : (
    <details className="indice">
      <summary className="indice-title">Índice</summary>
      <hr />

      <ol>
        {indiceList.map(({ title, id }) => {
          return (
            <li>
              <a href={"#" + id}>{title}</a>
            </li>
          );
        })}
      </ol>
    </details>
  );
}
