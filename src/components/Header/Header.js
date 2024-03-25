import React from "react";
import "./styles.css";

import DoemedLogoPrincipalColor from "../../assets/DoemedLogoPrincipalColor.svg";

export default function Header() {
  return (
    <div className="header-container">
      <button className="button menu"></button>
      <figure className="logo-container">
        <img className="logo-image" src={DoemedLogoPrincipalColor} alt="Logo" />
      </figure>
      <button className="button notifications"></button>
    </div>
  );
}
