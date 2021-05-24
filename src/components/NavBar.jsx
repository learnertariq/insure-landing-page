import React, { useState } from "react";
import Toggler from "./common/Toggler";
import logo from "../assets/logo.svg";
import Button from "./common/Button";

function NavBar(props) {
  const [clicked, setClicked] = useState(false);

  function handleToggle() {
    setClicked(!clicked);
  }

  function getListClasses() {
    let classes = "list nav__list ";
    return clicked ? classes + "list--expanded" : classes;
  }

  return (
    <section className='section section-nav'>
      <div className="nav container nav-container">
        <a className="nav__brand">
          <img src={logo} alt="Brand Logo" />
        </a>
        <Toggler clicked={clicked} onClick={handleToggle} />
        <ul className={getListClasses()}>
          <li className="list__item nav__item">
            <a href='#' className="link nav__link">How we work</a>
          </li>
          <li className="list__item nav__item">
            <a href='#' className="link nav__link">Blog</a>
          </li>
          <li className="list__item nav__item">
            <a href='#' className="link nav__link">Account</a>
          </li>
          <li className="list__item nav__item">
            <a href='#' className="link nav__link">
              <Button />
            </a>
          </li>
        </ul>
      </div>
      </section>
  );
}

export default NavBar;
