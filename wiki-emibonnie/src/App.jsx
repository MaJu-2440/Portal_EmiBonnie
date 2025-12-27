import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
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
