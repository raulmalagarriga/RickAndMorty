import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Determines if the "menu icon" was clicked or not. Note that this icon is only visible when the window width is small.
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };
  return (
    <nav className="navbar">
      {menuClicked ? (
        <FiX size={25} className={"navbar__menu"} onClick={toggleMenuClick} />
      ) : (
        <FiMenu
          size={25}
          className={"navbar__menu"}
          onClick={toggleMenuClick}
        />
      )}
      <ul className={menuClicked ? "navbar__list navbar__list--active" : "navbar__list"}>
        <li className="navbar_item">
          <Link className="navbar__link" to='/'>Home</Link>
          <Link className="navbar__link" to='/characters'>Characters</Link>
          <Link className="navbar__link" to='/chapters'>Chapters</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
