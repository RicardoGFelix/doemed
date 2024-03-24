import React from "react";
import DoemedLogoSecundaryColor from "../../assets/DoemedLogoSecundaryColor.svg";
import "./styles.css";

import LocalityContainer from "../../components/LocalityContainer/LocalityContainer";

function CitizenRegistrationPage() {
  return (
    <div className="citizen-registration-page">
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
        <div className="form-citizen-registration-container">
          <div className="input-container">
            <input className="input" type="text" placeholder="CPF" />
          </div>
          <div className="input-container">
            <input className="input" type="text" placeholder="Nome Completo" />
          </div>
          <div className="input-container">
            <input
              className="input"
              type="text"
              placeholder="Data de Nascimento"
            />
          </div>
          <LocalityContainer />
          <div className="input-container">
            <input className="input" type="password" placeholder="Senha" />
          </div>
          <div className="input-container">
            <input
              className="input"
              type="password"
              placeholder="Confirmar Senha"
            />
          </div>
        </div>
        <div className="buttons">
          <button className="button">Cadastrar</button>
          <button className="button link">
            Já possui uma conta? Acesse-a!
          </button>
        </div>
      </div>
    </div>
  );
}

export default CitizenRegistrationPage;
