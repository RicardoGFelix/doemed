import React from "react";
import { useNavigate } from "react-router-dom";

import DoemedLogoSecundaryColor from "../../assets/DoemedLogoSecundaryColor.svg";
import "./styles.css";

import LocalityContainer from "../../components/LocalityContainer/LocalityContainer";

import cookies from "../../utils/cookies";
import validations from "../../utils/validations";

import { createCitizen } from "../../apis/Citizen";

function CitizenRegistrationPage() {
  const navigate = useNavigate();

  function register() {
    const cpf = document.getElementById("cpf_input");
    const name = document.getElementById("name_input");
    const birthdate = document.getElementById("birthdate_input");
    const state = cookies.getCookie("@doemed/state_register");
    const city = cookies.getCookie("@doemed/city_register");
    const email = document.getElementById("email_input");

    if (
      validations.validateInput(cpf.value) &&
      validations.validateInput(name.value) &&
      validations.validateInput(birthdate.value) &&
      validations.validateInput(state) &&
      validations.validateInput(city) &&
      validations.validateInput(email.value)
    ) {
      const locality = { state: state, city: city };

      const data = {
        cpf: cpf.value,
        name: name.value,
        birthdate: birthdate.value,
        locality: locality,
        email: email.value,
      };

      createCitizen(data, email.value)
        .then(() => {
          console.log("Document written with success!");
          cookies.setCookie("@doemed/current-user", JSON.stringify(data), null);
          navigate("/home");
        })
        .catch((e) => {
          console.log("Error to write document: ", e);
        });
    }
  }

  function navigateToInitialPage() {
    navigate("/");
  }

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
            <input
              id="cpf_input"
              className="input"
              type="text"
              placeholder="CPF"
            />
          </div>
          <div className="input-container">
            <input
              id="name_input"
              className="input"
              type="text"
              placeholder="Nome Completo"
            />
          </div>
          <div className="input-container">
            <input
              id="birthdate_input"
              className="input"
              type="text"
              placeholder="Data de Nascimento"
            />
          </div>
          <LocalityContainer />
          <div className="input-container">
            <input
              id="email_input"
              className="input"
              type="text"
              placeholder="E-mail"
            />
          </div>
        </div>
        <div className="buttons">
          <button
            className="button"
            onClick={() => {
              register();
            }}
          >
            Cadastrar
          </button>
          <button
            className="button link"
            onClick={() => {
              navigateToInitialPage();
            }}
          >
            Já possui uma conta? Acesse-a!
          </button>
        </div>
      </div>
    </div>
  );
}

export default CitizenRegistrationPage;
