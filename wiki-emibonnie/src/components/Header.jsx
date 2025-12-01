import React from "react"; // (Opcional nas versões novas, mas bom pra garantir)
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to={"/"}>Portal EmiBonnie</Link>
      </div>

      <nav className="nav-mobile">
        <div className="nav-icons">
          <i className="fa-solid fa-bars"></i>
          <i className="fa-solid fa-xmark"></i>
        </div>

        <ul className="nav-mobile_lista" hidden>
          <li className="decoration">
            <i className="fa-solid fa-caret-up"></i>
          </li>
          <li>
            <a href="index.html">
              Página Principal<i className="fa-solid fa-angle-right"></i>
            </a>
          </li>
          <li>
            <a href="#">
              Wiki Emi<i className="fa-solid fa-angle-right"></i>
            </a>
          </li>
          <li>
            <a href="#">
              Wiki Bonnie<i className="fa-solid fa-angle-right"></i>
            </a>
          </li>
          <li>
            <a href="us-wiki.html">
              Wiki Us<i className="fa-solid fa-angle-right"></i>
            </a>
          </li>
          <li>
            <a href="#">
              Galeria<i className="fa-solid fa-angle-right"></i>
            </a>
          </li>
          <li>
            <a href="#">
              Notícias<i className="fa-solid fa-angle-right"></i>
            </a>
          </li>
          <li>
            <a href="#">
              Links/Comunidade<i className="fa-solid fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
