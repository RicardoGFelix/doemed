import React from "react";
import DoemedLogoSecundaryColor from "../../assets/DoemedLogoSecundaryColor.svg"
import "./styles.css";

function InitialPage() {
  return (
    <div className="initial-page">
      <div className="presentation-container">
        <figure className="logo-container">
          <img className="logo-image" src={DoemedLogoSecundaryColor} alt="Logo" />
        </figure>
        <p className="presentation-text">Promovendo a solidariedade em prol da saúde de todos!</p>
      </div>
      <div className="action-container">
        <div className="buttons">
          <button className="button">Entrar como Cidadão</button>
          <button className="button">Entrar como Instituição de Saúde</button>
        </div>
      </div>
    </div>
  );
}

export default InitialPage;
