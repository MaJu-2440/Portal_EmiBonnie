import React from "react"; // (Opcional nas versões novas, mas bom pra garantir)
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icon-emibonnie__white.png";

function Header() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setisMenuOpen(!isMenuOpen);
  };

  // desabilita menu mobile ao redimensionar
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setisMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Menu submenu toggle
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const handleSubMenuToggle = (id) => {
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  //Indice fecha quando clica fora dele
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setisMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMenuOpen]);

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
            ref={menuButtonRef}
            className={isMenuOpen ? "nav-icons toggle" : "nav-icons"}
            onClick={handleMenuToggle}
          >
            <i
              className={isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            ></i>
          </div>
        )}

        <ul
          ref={navRef}
          className={isMenuOpen ? "nav_lista open" : "nav_lista"}
          hidden={!isMenuOpen}
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
                    to={"perfil/emi-thasorn"}
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
                    to={"perfil/bonnie-pattraphus"}
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
                    to={"trabalhos/entrevistas-e-revistas"}
                    onClick={handleMenuToggle}
                    className="link"
                  >
                    <div className="link-title">
                      Entrevistas/Revistas
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
