import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import React from "react";

import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";

const Header = () => {
  const { count } = useContext(GlobalContext);
  return (
    <header className="header">
      <div className="headerContainer">
        <img src={logo} alt="logo da Cadastra" />
        <div>
          <img src={bag} alt="sacola de compras" />
          <span>{count}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
