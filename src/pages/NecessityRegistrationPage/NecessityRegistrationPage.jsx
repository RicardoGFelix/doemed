import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import Header from "../../components/Header/Header";
import MeasureSelect from "../../components/MeasureSelect/MeasureSelect";
import TargeSelect from "../../components/TargeSelect/TargeSelect";

import cookies from "../../utils/cookies";
import validations from "../../utils/validations";

import { createNecessity } from "../../apis/Necessity";

function NecessityRegistrationPage() {
  const navigate = useNavigate();
  var currentUser = JSON.parse(cookies.getCookie("@doemed/current-user"));

  function registerNecessity() {
    const drug = document.getElementById("drug_input");
    const drugName = document.getElementById("drug_name_input");
    const dosageQuantity = document.getElementById("dosage_input");
    const measure = cookies.getCookie("@doemed/measure_necessity");
    const targe = cookies.getCookie("@doemed/targe_necessity");
    const recipeDate = document.getElementById("recipe_date_input");

    if (
      validations.validateInput(drug.value) &&
      validations.validateInput(drugName.value) &&
      validations.validateInput(dosageQuantity.value) &&
      validations.validateInput(measure) &&
      validations.validateInput(targe) &&
      validations.validateInput(recipeDate.value)
    ) {
      const creator = {
        name: currentUser.name,
        birthdate: currentUser.birthdate,
        locality: currentUser.locality,
      };
      const dosage = { quantity: dosageQuantity.value, measure: measure };

      const data = {
        cpf: currentUser.cpf,
        creator: creator,
        drug: drug.value,
        drugName: drugName.value,
        dosage: dosage,
        targe: targe,
        status: "Em Aberto",
        recipeDate: recipeDate.value,
      };

      const id = `${data.cpf}-${data.drug}-${data.drugName}`;

      createNecessity(data, id)
        .then((s) => {
          console.log("Document written with success!");

          cookies.deleteCookie("@doemed/measure_necessity");
          cookies.deleteCookie("@doemed/targe_necessity");

          navigate("/home");
        })
        .catch((e) => {
          console.log("Error to write document: ", e);
        });
    }
  }

  return (
    <div className="necessity-registration-page">
      <Header />

      <div className="page-title">Cadastre sua necessidade</div>

      <div className="necessity-registration-page-content">
        <div className="form-necessity-registration-container">
          <div className="form-inputs">
            <div className="input-container">
              <input
                id="drug_input"
                className="input"
                type="text"
                placeholder="Fármaco"
              />
            </div>
            <div className="input-container">
              <input
                id="drug_name_input"
                className="input"
                type="text"
                placeholder="Nome do Medicamento"
              />
            </div>
            <div className="input-container">
              <input
                id="dosage_input"
                className="input dosage"
                type="text"
                placeholder="Dosagem"
              />
              <MeasureSelect />
            </div>
            <div className="input-container">
              <TargeSelect />
            </div>
            <div className="input-container">
              <input
                id="recipe_date_input"
                className="input"
                type="text"
                placeholder="Data da Receita"
              />
            </div>
          </div>
          <button
            className="button"
            onClick={() => {
              registerNecessity();
            }}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default NecessityRegistrationPage;
