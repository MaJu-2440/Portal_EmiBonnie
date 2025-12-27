import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const { slug } = useParams();
  const [tipo, setTipo] = useState(slug || "default");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTipo(slug);
  }, [slug]);

  return (
    <div className="app-container">
      <ScrollToTop />
      <Header tipo={tipo || "default"} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
