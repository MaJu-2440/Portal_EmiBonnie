import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { styleMap } from "./data/styleMap.jsx";

function App() {
  const { slug, nome } = useParams();
  useEffect(() => {
    const styles = styleMap[slug || nome] || styleMap.default;
    const root = document.documentElement;

    Object.entries(styles).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug || nome]);

  return (
    <div className="app-container">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
