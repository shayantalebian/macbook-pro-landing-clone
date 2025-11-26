import React from "react";
import { navLink } from "../constants";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="../../public/logo.svg" alt="Apple logo" />

        <ul>
          {navLink.map(({ label }) => (
            <li key={label}>
              <a href="#">{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="../../public/search.svg" alt="Search icon" />
          </button>
          <button>
            <img src="../../public/cart.svg" alt="Cart icon" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
