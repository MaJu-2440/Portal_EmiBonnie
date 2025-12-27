import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";
import usData from "../data/us-data.json";
import moonshadowData from "../data/moonshadow-data.json";
import SectionRenderer from "../components/SectionRenderer";
import Indice from "../components/Indice";
import ScrollBtn from "../components/ScrollBtn.jsx";

const bancoDeDados = [usData, moonshadowData];

export default function Wiki() {
  const { slug } = useParams();
  const pageData = bancoDeDados.find((dados) => dados.slug === slug);

  const indiceList = pageData.sections.map((section) => ({
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
    <section className="content_container">
      <ErrorBoundary fallback={<div>Ops... Algo deu errado!</div>}>
        {pageData.sections.map((section, index) => {
          return (
            <SectionRenderer
              key={index}
              indiceList={indiceList}
              section={section}
            />
          );
        })}
      </ErrorBoundary>
      {isMobile && <Indice indiceList={indiceList} />}
      <ScrollBtn />
    </section>
  );
}
