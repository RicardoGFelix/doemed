import React from "react";
import { useNavigate } from "react-router-dom";

import DoemedLogoSecundaryColor from "../../assets/DoemedLogoSecundaryColor.svg";
import "./styles.css";

import cookies from "../../utils/cookies";

function InitialPage() {
  const navigate = useNavigate();

  function navigateToLoginPage(user: string) {
    cookies.setCookie("@doemed/type-of-user", user, null);

    navigate("/login");
  }

  return (
    <div className="initial-page">
      <div className="presentation-container">
        <figure className="logo-container">
          <img
            className="logo-image"
            src={DoemedLogoSecundaryColor}
            alt="Logo"
          />
        </figure>
        <p className="presentation-text">
          Promovendo a solidariedade em prol da saúde de todos!
        </p>
      </div>
      <div className="action-container">
        <div className="buttons">
          <button
            className="button"
            onClick={() => {
              navigateToLoginPage("C");
            }}
          >
            Entrar como Cidadão
          </button>
          <button
            className="button"
            onClick={() => {
              navigateToLoginPage("I");
            }}
          >
            Entrar como Instituição de Saúde
          </button>
        </div>
      </div>
    </div>
  );
}

export default InitialPage;
