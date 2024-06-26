import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import DoemedLogoPrincipalColor from "../../assets/DoemedLogoPrincipalColor.svg";
import PrincipalColorUserIcon from "../../assets/PrincipalColorUserIcon.svg";
import SecurityIcon from "../../assets/SecurityIcon.svg";
import ExitIcon from "../../assets/ExitIcon.svg";

import { signOut } from "../../apis/Authentication";

export default function Menu() {
  const navigate = useNavigate();

  function closeMenu() {
    let menu = document.getElementById("menu");

    if (menu) {
      menu.classList.remove("opened");
    }
  }

  function logout() {
    signOut();
    navigate("/");
  }

  return (
    <div id="menu" className="menu-container">
      <div className="header-menu-container">
        <figure className="logo-container">
          <img
            className="logo-image"
            src={DoemedLogoPrincipalColor}
            alt="Logo"
          />
        </figure>
        <button
          className="button-close"
          onClick={() => {
            closeMenu();
          }}
        ></button>
      </div>
      <div className="menu-title">Menu</div>
      <div className="menu-buttons">
        <button className="menu-button" onClick={() => navigate("/meu-perfil")}>
          <figure className="button-image-container">
            <img
              className="button-image"
              src={PrincipalColorUserIcon}
              alt="Ícone de Meu Perfil"
            />
          </figure>
          <span className="button-title">Meu Perfil</span>
        </button>
        <button className="menu-button">
          <figure className="button-image-container">
            <img
              className="button-image"
              src={SecurityIcon}
              alt="Ícone de Termos de Uso e Política de Privacidade"
            />
          </figure>
          <span className="button-title">
            Termos de Uso e Política de Privacidade
          </span>
        </button>
        <button className="menu-button">
          <figure className="button-image-container">
            <img className="button-image" src={ExitIcon} alt="Ícone de Sair" />
          </figure>
          <span
            className="button-title"
            onClick={() => {
              logout();
            }}
          >
            Sair
          </span>
        </button>
      </div>
    </div>
  );
}
