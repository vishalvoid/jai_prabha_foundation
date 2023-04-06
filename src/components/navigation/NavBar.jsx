import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  console.log(menu);
  return (
    <div className="navigation">
      <header>
        <a href="#" className="logo">
          <img className="logo__img" src="./logo.png" alt="logo" />
          <div className="logo__name">
            <h1 className="logo__name-primary">Jai Prabha</h1>
            <h2 className="logo__name-secondary">Foundation</h2>
          </div>
        </a>

        <ul className={menu ? "navbar open" : "navbar"}>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#"> About Us</a>
          </li>
          <li>
            <a href="#"> Events</a>
          </li>
          <li>
            <a href="#"> What We Do</a>
          </li>
          <li>
            <a href="#"> Media</a>
          </li>
        </ul>

        <div className="main">
          <a href="#" className="main__donation">
            Donate
          </a>
          <div
            className={!menu ? "bx bx-menu" : "bx bx-x"}
            id="menu-icon"
            onClick={() => {
              setMenu(!menu);
            }}
          ></div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
