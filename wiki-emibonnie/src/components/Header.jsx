import React from "react"; // (Opcional nas versões novas, mas bom pra garantir)
import { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icon-emibonnie__white.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="logo">
        <Link to={"/"}>
          <img src={icon} alt="Logo Portal EmiBonnie" />
        </Link>
      </div>

      <nav onClick={handleMenuToggle} className="nav-mobile">
        {isOpen ? (
          <div className="nav-icons toggle">
            <i className="fa-solid fa-xmark"></i>
          </div>
        ) : (
          <div className="nav-icons">
            <i className="fa-solid fa-bars"></i>
          </div>
        )}

        <ul
          className={isOpen ? "nav-mobile_lista open" : "nav-mobile_lista"}
          hidden={!isOpen}
        >
          <li className="decoration">
            <i className="fa-solid fa-caret-up"></i>
          </li>
          <li>
            <Link to={"/"} onClick={handleMenuToggle}>
              Página Principal<i className="fa-solid fa-angle-right"></i>
            </Link>
          </li>
          <li>
            <Link to={"wiki/emi"} onClick={handleMenuToggle}>
              Wiki Emi Thasorn<i className="fa-solid fa-angle-right"></i>
            </Link>
          </li>
          <li>
            <Link to={"wiki/bonnie"} onClick={handleMenuToggle}>
              Wiki Bonnie Pattraphus<i className="fa-solid fa-angle-right"></i>
            </Link>
          </li>
          <li>
            <Link to={"wiki/us-series"} onClick={handleMenuToggle}>
              Wiki Us the series<i className="fa-solid fa-angle-right"></i>
            </Link>
          </li>
          <li>
            <Link to={"wiki/moonshadow-series"} onClick={handleMenuToggle}>
              Wiki Moonshadow<i className="fa-solid fa-angle-right"></i>
            </Link>
          </li>
          <li>
            <Link to={"galeria"} onClick={handleMenuToggle}>
              Galeria<i className="fa-solid fa-angle-right"></i>
            </Link>
          </li>
          <li>
            <Link to={"trabalhos/discografia"} onClick={handleMenuToggle}>
              Discografia<i className="fa-solid fa-angle-right"></i>
            </Link>
          </li>
          <li>
            <Link to={"trabalhos/filmografia"} onClick={handleMenuToggle}>
              Filmografia<i className="fa-solid fa-angle-right"></i>
            </Link>
          </li>
          <li>
            <Link
              to={"trabalhos/entrevistas-e-sessoes-de-fotos"}
              onClick={handleMenuToggle}
            >
              Entrevistas/Photoshoots<i className="fa-solid fa-angle-right"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
