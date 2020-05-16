import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="">
      <Link className="" to="/">
        Home
      </Link>
      <Link className="" to="/settings">
        Settings
      </Link>
    </nav>
  );
};

export default Menu;
