import React, { useState } from "react";

const Indice = ({ indiceList }) => {
  const [isIndiceOpen, setIndiceOpen] = useState(false);

  const handleIndice = () => {
    setIndiceOpen(!isIndiceOpen);
  };
  return (
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
  );
};

export default Indice;
