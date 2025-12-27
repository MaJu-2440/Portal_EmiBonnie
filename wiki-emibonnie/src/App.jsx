import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { useParams } from "react-router-dom";

function App() {
  const { tipo } = useParams();

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
