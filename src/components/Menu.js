import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav class="">
      <a class="" href="">
        <Link to="/">Home</Link>
      </a>
      <a class="" href="">
        <Link to="/settings">Settings</Link>
      </a>
    </nav>
  );
};

export default Menu;
