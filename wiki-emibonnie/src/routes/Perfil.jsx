import React, { useEffect, useState } from 'react'
import dados from '../data/trabalhos.json'
import { useParams } from 'react-router-dom';
import CardTrabalhos from '../components/CardTrabalhos.jsx';

function Perfil() {
    const { nome } = useParams();
    const [filtroNome, setFiltroNome] = useState(nome || "Carregando...");

useEffect(() => {
    setFiltroNome(nome);
}, [nome])

    const trabalhosFiltrados = dados.filter((item) => item.artistas.includes(filtroNome));

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

export default Perfil