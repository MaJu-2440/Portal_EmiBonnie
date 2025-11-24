import React from 'react' // (Opcional nas versões novas, mas bom pra garantir)

function Header() {
  return (
    <header>
        <div class="logo">
        <a href="#">Portal EmiBonnie</a>
    </div>

      <nav class="nav-mobile">
        <div class="nav-icons">
          <i class="fa-solid fa-bars"></i>
          <i class="fa-solid fa-xmark"></i>
        </div>

        <ul class="nav-mobile_lista" hidden>
            <li class="decoration"><i class="fa-solid fa-caret-up"></i></li>
          <li>
            <a href="index.html"
              >Página Principal<i class="fa-solid fa-angle-right"></i
            ></a>
          </li>
          <li>
            <a href="#">Wiki Emi<i class="fa-solid fa-angle-right"></i></a>
          </li>
          <li>
            <a href="#">Wiki Bonnie<i class="fa-solid fa-angle-right"></i></a>
          </li>
          <li>
            <a href="us-wiki.html"
              >Wiki Us<i class="fa-solid fa-angle-right"></i
            ></a>
          </li>
          <li>
            <a href="#">Galeria<i class="fa-solid fa-angle-right"></i></a>
          </li>
          <li>
            <a href="#">Notícias<i class="fa-solid fa-angle-right"></i></a>
          </li>
          <li>
            <a href="#"
              >Links/Comunidade<i class="fa-solid fa-angle-right"></i
            ></a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header