import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
