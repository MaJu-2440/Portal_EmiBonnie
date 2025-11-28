// import React, { useEffect, useState } from "react";
// import "../css/Galeria.css"; // Vamos criar esse CSS no passo 2

// function Galeria({ fotos }) {
//   // Estado que guarda o índice da foto atual (começa na 0)
//   const [indiceAtual, setIndiceAtual] = useState(0);
//   const [filtroGaleria, setFiltroGaleria] = useState("todos");

//   const fotosFiltradas =
//     filtroGaleria === "todos"
//       ? fotos
//       : fotos.filter((foto) => foto.episodio === filtroGaleria);

//   useEffect(() => {
//     setIndiceAtual(0); // Reseta para a primeira foto ao mudar o filtro
//   }, [filtroGaleria]);

//   // Lógica para ir para a próxima
//   const proximaFoto = () => {
//     // Se estiver na última, volta para a primeira (0), senão soma 1
//     if (indiceAtual === fotosFiltradas.length - 1) {
//       setIndiceAtual(0);
//     } else {
//       setIndiceAtual(indiceAtual + 1);
//     }
//   };

//   // Lógica para voltar
//   const fotoAnterior = () => {
//     // Se estiver na primeira, vai para a última, senão subtrai 1
//     if (indiceAtual === 0) {
//       setIndiceAtual(fotosFiltradas.length - 1);
//     } else {
//       setIndiceAtual(indiceAtual - 1);
//     }
//   };

//   // Se não houver fotos, não renderiza nada para não dar erro
//   if (fotosFiltradas.length === 0) {
//     return <div className="sem-fotos">Sem fotos neste episódio.</div>;
//   }

//   return (
//     <div className="carousel-container">
//       {/* --- ÁREA DE FILTROS (ABAS) --- */}
//       <div className="filtros-container">
//         <button
//           className={
//             filtroEpisodio === "todos" ? "btn-filtro ativo" : "btn-filtro"
//           }
//           onClick={() => setFiltroEpisodio("todos")}
//         >
//           Todos
//         </button>

//         {/* {listaEpisodios.map((ep) => (
//           <button
//             key={ep}
//             className={
//               filtroEpisodio === ep ? "btn-filtro ativo" : "btn-filtro"
//             }
//             onClick={() => setFiltroEpisodio(ep)}
//           >
//             Ep {ep}
//           </button>
//         ))} */}
//       </div>

//       {/* A Imagem Atual */}
//       <div className="carousel-display">
//         <img
//           src={fotos[indiceAtual].url}
//           alt={fotos[indiceAtual].legenda}
//           className="carousel-img"
//         />

//         {/* Legenda sobreposta */}
//         <div className="carousel-caption">
//           <p>{fotos[indiceAtual].legenda}</p>
//         </div>
//       </div>

//       {/* Botões de Controle */}
//       <button onClick={fotoAnterior} className="btn-nav btn-left">
//         ❮
//       </button>
//       <button onClick={proximaFoto} className="btn-nav btn-right">
//         ❯
//       </button>

//       {/* Indicadores (bolinhas) opcionais */}
//       <div className="indicadores">
//         {fotos.map((_, idx) => (
//           <span
//             key={idx}
//             className={idx === indiceAtual ? "bolinha ativa" : "bolinha"}
//             onClick={() => setIndiceAtual(idx)} // Clicar na bolinha vai pra foto
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Galeria;
