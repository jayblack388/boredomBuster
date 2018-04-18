import React from "react";
import { Link } from "react-router-dom";


export const NavLink = () => {
  return (
    <ul className="navbar-nav ml-auto">

    <li className="nav-item">
      <Link className="nav-link" to="/">
        Food
      </Link>
      <Link className="nav-link" to="/">
        Movies
      </Link>
    </li>
    </ul>
  );
};


