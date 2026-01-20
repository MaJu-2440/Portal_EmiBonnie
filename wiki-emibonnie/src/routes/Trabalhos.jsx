import React from 'react'
import { useEffect, useState } from 'react'
import dados from '../data/trabalhos.json'
import { useParams } from 'react-router-dom';
import CardTrabalhos from '../components/CardTrabalhos.jsx';

function Trabalhos() {
  const { tipo } = useParams();
    const [filtroTipo, setFiltroTipo] = useState(tipo || "todos");

useEffect(() => {
    setFiltroTipo(tipo);
}, [tipo])

    const trabalhosFiltrados = dados.filter((item) => {
      if (filtroTipo == "entrevistas-e-revistas") {
        return item.tipo === "entrevista" || item.tipo === "revista";
      } else if (filtroTipo == "discografia") {
        return item.tipo === "musica";
      } else if (filtroTipo == "filmografia") {
        return item.tipo === "filme" || item.tipo === "serie" || item.tipo === "mv";
      } else if (filtroTipo == "todos") {
        return true;
      } else {
        return "Nenhum trabalho encontrado";
      }
    });
console.log(trabalhosFiltrados);


  return (
    <div className='perfil-container'>
        <div className='trabalhos-container'>

        {trabalhosFiltrados.map((trabalho) => {
            return <CardTrabalhos item={trabalho}/>
        })}
        </div>

    </div>
  )
}

export default Trabalhos