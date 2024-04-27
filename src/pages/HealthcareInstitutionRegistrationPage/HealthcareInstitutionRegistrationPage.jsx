import React from "react";
import { useNavigate } from "react-router-dom";

import DoemedLogoSecundaryColor from "../../assets/DoemedLogoSecundaryColor.svg";
import "./styles.css";

import LocalityContainer from "../../components/LocalityContainer/LocalityContainer";

import cookies from "../../utils/cookies";
import validations from "../../utils/validations";

import { createHealthcareInstitution } from "../../apis/HealthcareInstitution";

function HealthcareInstitutionRegistrationPage() {
  const navigate = useNavigate();

  function register() {
    const cnes = document.getElementById("cnes_input");
    const institutionName = document.getElementById("institution_name_input");
    const address = document.getElementById("address_input");
    const number = document.getElementById("number_input");
    const state = cookies.getCookie("@doemed/state_register");
    const city = cookies.getCookie("@doemed/city_register");
    const email = document.getElementById("email_input");

    if (
      validations.validateInput(cnes.value) &&
      validations.validateInput(institutionName.value) &&
      validations.validateInput(address.value) &&
      validations.validateInput(number.value) &&
      validations.validateInput(state) &&
      validations.validateInput(city) &&
      validations.validateInput(email.value)
    ) {
      const locality = { state: state, city: city };

      const data = {
        cnes: cnes.value,
        institutionName: institutionName.value,
        address: address.value,
        number: number.value,
        locality: JSON.stringify(locality),
        email: email.value,
      };

      createHealthcareInstitution(data, email.value)
        .then((s) => {
          console.log("Document written with success: ", s);
          cookies.setCookie("@opr/current-user", JSON.stringify(data), null);
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
    <div className="healthcare-institution-registration-page">
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
        <div className="form-healthcare-institution-registration-container">
          <div className="input-container">
            <input
              id="cnes_input"
              className="input"
              type="text"
              placeholder="CNES"
            />
          </div>
          <div className="input-container">
            <input
              id="institution_name_input"
              className="input"
              type="text"
              placeholder="Nome da Instituição"
            />
          </div>
          <div className="input-container">
            <div className="input-container-medium-size">
              <input
                id="address_input"
                className="input"
                type="text"
                placeholder="Endereço"
              />
            </div>
            <div className="input-container-small-size">
              <input
                id="number_input"
                className="input"
                type="text"
                placeholder="Número"
              />
            </div>
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

export default HealthcareInstitutionRegistrationPage;
