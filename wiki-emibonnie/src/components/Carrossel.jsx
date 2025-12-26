import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css"; // estilos básicos
import "swiper/css/navigation"; // se quiser navegação

export default function Carrossel({ fotos }) {
  if (fotos.length === 0) return null; // Não mostra carrossel vazio

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={10}
      slidesPerView={1} // mobile-first: 1 slide por vez
      navigation={{ clickable: true }}
      autoplay={{
        delay: 10000, // tempo entre slides (ms)
        disableOnInteraction: true, // continua mesmo após interação
      }}
      style={{ width: "100%" }}
    >
      {fotos.map((foto) => (
        <SwiperSlide>
          <div key={foto.id} className="carrossel-item">
            {/* O segredo: Altura fixa, largura automática */}

            <img src={foto.url} className="img" alt={foto.legenda} />
            <p className="legenda">{foto.legenda}</p>
            <span className="creditos">{foto.creditos}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
