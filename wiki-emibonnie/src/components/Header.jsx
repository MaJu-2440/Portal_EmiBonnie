import React from "react"; // (Opcional nas versões novas, mas bom pra garantir)
import { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icon-emibonnie__white.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const [openSubMenu, setOpenSubMenu] = useState(null); // guarda o submenu aberto

  const handleSubMenuToggle = (id) => {
    // se já estiver aberto, fecha; senão abre o novo
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  return (
    <header>
      <div className="logo">
        <Link to={"/"}>
          <img src={icon} alt="Logo Portal EmiBonnie" />
        </Link>
      </div>

      <nav className="nav-mobile">
        {isOpen ? (
          <div className="nav-icons toggle" onClick={handleMenuToggle}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        ) : (
          <div className="nav-icons" onClick={handleMenuToggle}>
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
            <Link to={"/"} onClick={handleMenuToggle} className="link">
              Página Principal<i className="fa-solid fa-angle-right"></i>
            </Link>
          </li>

          <li onClick={() => handleSubMenuToggle("menu1")} className="link">
            Perfil<i className="fa-solid fa-angle-right"></i>
          </li>
          {openSubMenu === "menu1" && (
            <ul className="nav-mobile_sub-lista">
              <li>
                <Link
                  to={"perfil/emi"}
                  className="link"
                  onClick={handleMenuToggle}
                >
                  Emi<i className="fa-solid fa-angle-right"></i>
                </Link>
              </li>
              <li>
                <Link
                  to={"perfil/bonnie"}
                  className="link"
                  onClick={handleMenuToggle}
                >
                  Bonnie<i className="fa-solid fa-angle-right"></i>
                </Link>
              </li>
            </ul>
          )}

          <li onClick={() => handleSubMenuToggle("menu2")} className="link">
            Wiki<i className="fa-solid fa-angle-right"></i>
          </li>
          {openSubMenu === "menu2" && (
            <ul className="nav-mobile_sub-lista">
              <li>
                <Link
                  to={"wiki/us-series"}
                  onClick={handleMenuToggle}
                  className="link"
                >
                  Us the series<i className="fa-solid fa-angle-right"></i>
                </Link>
              </li>
              <li>
                <Link
                  to={"wiki/moonshadow-series"}
                  onClick={handleMenuToggle}
                  className="link"
                >
                  Moonshadow<i className="fa-solid fa-angle-right"></i>
                </Link>
              </li>
            </ul>
          )}

          <li onClick={() => handleSubMenuToggle("menu3")} className="link">
            Trabalhos<i className="fa-solid fa-angle-right"></i>
          </li>
          {openSubMenu === "menu3" && (
            <ul className="nav-mobile_sub-lista">
              <li>
                <Link
                  to={"trabalhos/discografia"}
                  onClick={handleMenuToggle}
                  className="link"
                >
                  Discografia<i className="fa-solid fa-angle-right"></i>
                </Link>
              </li>
              <li>
                <Link
                  to={"trabalhos/filmografia"}
                  onClick={handleMenuToggle}
                  className="link"
                >
                  Filmografia<i className="fa-solid fa-angle-right"></i>
                </Link>
              </li>
              <li>
                <Link
                  to={"trabalhos/entrevistas-e-sessoes-de-fotos"}
                  onClick={handleMenuToggle}
                  className="link"
                >
                  Entrevistas/Photoshoots
                  <i className="fa-solid fa-angle-right"></i>
                </Link>
              </li>
            </ul>
          )}

          <li>
            <Link to={"galeria"} onClick={handleMenuToggle} className="link">
              Galeria<i className="fa-solid fa-angle-right"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
