import React from "react";
import "./styles.css";

import DoemedLogoPrincipalColor from "../../assets/DoemedLogoPrincipalColor.svg";

import Menu from "../Menu/Menu";
import Notifications from "../Notifications/Notifications";

export default function Header() {
  function toggleMenu() {
    let menu = document.getElementById("menu");

    if (menu?.classList.contains("opened")) {
      menu.classList.remove("opened");
    } else {
      menu.classList.add("opened");
    }
  }

  function toggleNotifications() {
    let notifications = document.getElementById("notifications_container");

    if (notifications?.classList.contains("opened")) {
      notifications.classList.remove("opened");
    } else {
      notifications.classList.add("opened");
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
      <button
        className="button notifications"
        onClick={() => {
          toggleNotifications();
        }}
      ></button>
      <Notifications />
    </div>
  );
}
