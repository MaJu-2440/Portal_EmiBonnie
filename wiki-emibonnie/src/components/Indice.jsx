import React, { useState, useEffect, useRef } from "react";

export default function Indice({ indiceList }) {
  const [isIndiceOpen, setIndiceOpen] = useState(false);

  const handleIndice = () => {
    setIndiceOpen(!isIndiceOpen);
  };

  // indice fecha quando
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIndiceOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Indice fecha quando clica fora dele
  const indiceRef = useRef(null);
  const indiceBtnRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        indiceRef.current &&
        !indiceRef.current.contains(event.target) &&
        indiceBtnRef.current &&
        !indiceBtnRef.current.contains(event.target) // se clicou fora
      ) {
        setIndiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!Array.isArray(indiceList)) return null;

  return isMobile ? (
    <div ref={indiceBtnRef} className="indice-btn" title="Índice">
      <div className={isIndiceOpen ? "indice-icons toggle" : "indice-icons"}>
        {isIndiceOpen ? (
          <i className="fa-solid fa-xmark" onClick={handleIndice}></i>
        ) : (
          <i className="fa-solid fa-list" onClick={handleIndice}></i>
        )}
      </div>

      <nav
        ref={indiceRef}
        className={isIndiceOpen ? "indice ativo open" : "indice ativo"}
      >
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
