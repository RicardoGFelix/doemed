import React from "react";
import "./styles.css";

import DoemedLogoPrincipalColor from "../../assets/DoemedLogoPrincipalColor.svg";

import Menu from "../Menu/Menu";

export default function Header() {
  function toggleMenu() {
    let menu = document.getElementById("menu");

    if (menu?.classList.contains("opened")) {
      menu.classList.remove("opened");
    } else {
      menu.classList.add("opened");
    }
  }

  return (
    <div className="header-container">
      <Menu />
      <button
        className="button menu"
        onClick={() => {
          toggleMenu();
        }}
      ></button>
      <figure className="logo-container">
        <img className="logo-image" src={DoemedLogoPrincipalColor} alt="Logo" />
      </figure>
      <button className="button notifications"></button>
    </div>
  );
}
