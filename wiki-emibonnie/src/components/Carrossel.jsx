import { useState, useRef } from "react";

export default function Carrossel({ fotos }) {
  if (fotos.length === 0) return null; // Não mostra carrossel vazio
  const [scrollPosition, setScrollPosition] = useState(0);
  const carrosselRef = useRef(null);

  const maxScroll = carrosselRef.current
    ? carrosselRef.current.scrollWidth - carrosselRef.current.clientWidth
    : 0;

  const scroll = (direction) => {
    const container = carrosselRef.current;
    const scrollAmount = 300;
    const newPosition =
      scrollPosition + (direction === "left" ? -scrollAmount : scrollAmount);

    if (newPosition < 0) {
      setScrollPosition(0);
      container.scrollLeft = 0;
    } else if (newPosition > maxScroll) {
      setScrollPosition(maxScroll);
      container.scrollLeft = maxScroll;
    } else {
      container.scrollLeft = newPosition;
      setScrollPosition(newPosition);
    }

    container.style.scrollBehavior = "smooth";
  };

  return (
    <div className="carrossel-container">
      <button
        className="carrossel-btn carrossel-btn-left"
        onClick={() => scroll("left")}
      >
        &lt;
      </button>
      <div className="carrossel-scroll" ref={carrosselRef}>
        {fotos.map((foto) => (
          <div key={foto.id} className="carrossel-item">
            {/* O segredo: Altura fixa, largura automática */}
            <img src={foto.url} alt={foto.legenda} />
            <p className="legenda">{foto.legenda}</p>
            <span className="creditos">{foto.creditos}</span>
          </div>
        ))}
      </div>
      <button
        className="carrossel-btn carrossel-btn-right"
        onClick={() => scroll("right")}
      >
        &gt;
      </button>
    </div>
  );
}
