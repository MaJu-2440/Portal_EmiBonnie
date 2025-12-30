import React from "react"; // (Opcional nas versões novas, mas bom pra garantir)
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icon-emibonnie__white.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const [openSubMenu, setOpenSubMenu] = useState(null); // guarda o submenu aberto

  const handleSubMenuToggle = (id) => {
    // se já estiver aberto, fecha; senão abre o novo
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  //Indice fecha quando clica fora dele
  const navRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) // se clicou fora
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      <div className="logo">
        <Link to={"/"}>
          <img src={icon} alt="Logo Portal EmiBonnie" />
        </Link>
      </div>

      <nav className="nav">
        {isMobile && (
          <div
            className={isOpen ? "nav-icons toggle" : "nav-icons"}
            onClick={handleMenuToggle}
          >
            <i
              className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            ></i>
          </div>
        )}

        <ul
          ref={navRef}
          className={isOpen ? "nav_lista open" : "nav_lista"}
          hidden={!isOpen}
        >
          <li className="decoration">
            <i className="fa-solid fa-caret-up"></i>
          </li>
          {isMobile && (
            <li>
              <Link to={"/"} onClick={handleMenuToggle} className="link">
                <div className="link-title">
                  Página Principal<i className="fa-solid fa-angle-right"></i>
                </div>
              </Link>
            </li>
          )}

          <li onClick={() => handleSubMenuToggle("menu1")} className="link">
            <div className="link-title">
              Perfil<i className="fa-solid fa-angle-right"></i>
            </div>
            {openSubMenu === "menu1" && (
              <ul className="nav_sub-lista">
                {!isMobile && (
                  <li className="decoration">
                    <i className="fa-solid fa-caret-up"></i>
                  </li>
                )}
                <li>
                  <Link
                    to={"perfil/emi"}
                    className="link"
                    onClick={handleMenuToggle}
                  >
                    <div className="link-title">
                      Emi<i className="fa-solid fa-angle-right"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"perfil/bonnie"}
                    className="link"
                    onClick={handleMenuToggle}
                  >
                    <div className="link-title">
                      Bonnie<i className="fa-solid fa-angle-right"></i>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li onClick={() => handleSubMenuToggle("menu2")} className="link">
            <div className="link-title">
              Wiki<i className="fa-solid fa-angle-right"></i>
            </div>
            {openSubMenu === "menu2" && (
              <ul className="nav_sub-lista">
                {!isMobile && (
                  <li className="decoration">
                    <i className="fa-solid fa-caret-up"></i>
                  </li>
                )}
                <li>
                  <Link
                    to={"wiki/us-series"}
                    onClick={handleMenuToggle}
                    className="link"
                  >
                    <div className="link-title">
                      Us the series<i className="fa-solid fa-angle-right"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"wiki/moonshadow-series"}
                    onClick={handleMenuToggle}
                    className="link"
                  >
                    <div className="link-title">
                      Moonshadow<i className="fa-solid fa-angle-right"></i>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li onClick={() => handleSubMenuToggle("menu3")} className="link">
            <div className="link-title">
              Trabalhos<i className="fa-solid fa-angle-right"></i>
            </div>
            {openSubMenu === "menu3" && (
              <ul className="nav_sub-lista">
                {!isMobile && (
                  <li className="decoration">
                    <i className="fa-solid fa-caret-up"></i>
                  </li>
                )}
                <li>
                  <Link
                    to={"trabalhos/discografia"}
                    onClick={handleMenuToggle}
                    className="link"
                  >
                    <div className="link-title">
                      Discografia<i className="fa-solid fa-angle-right"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"trabalhos/filmografia"}
                    onClick={handleMenuToggle}
                    className="link"
                  >
                    <div className="link-title">
                      Filmografia<i className="fa-solid fa-angle-right"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"trabalhos/entrevistas-e-sessoes-de-fotos"}
                    onClick={handleMenuToggle}
                    className="link"
                  >
                    <div className="link-title">
                      Entrevistas/Photoshoots
                      <i className="fa-solid fa-angle-right"></i>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to={"galeria/todos"}
              onClick={handleMenuToggle}
              className="link"
            >
              <div className="link-title">
                Galeria{isMobile && <i className="fa-solid fa-angle-right"></i>}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
