import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
    >
      <nav>
        <Link to="/cadastro">Cadastro</Link>
      </nav>
    </header>
  );
};

export default Header;