import React from "react";
import { Link } from "react-router-dom";
import "../estilos/errorPage.css";

const ErrorPage = () => {
  return (
    <section className="errorSection">
      <h1>Essa página não existe ainda :&#40;</h1>
      <Link to="/">Volte e tente outra hora!</Link>
    </section>
  );
};

export default ErrorPage;
