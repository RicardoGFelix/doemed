import React from "react";
import "./styles.css";

import Header from "../../components/Header/Header";
import MeasureSelect from "../../components/MeasureSelect/MeasureSelect";

function NecessityRegistrationPage() {
  return (
    <div className="necessity-registration-page">
      <Header />

      <div className="page-title">Cadastre sua necessidade</div>

      <div className="necessity-registration-page-content">
        <div className="form-necessity-registration-container">
          <div className="form-inputs">
            <div className="input-container">
              <input className="input" type="text" placeholder="Fármaco" />
            </div>
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="Nome do Medicamento"
              />
            </div>
            <div className="input-container">
              <input
                className="input dosage"
                type="text"
                placeholder="Dosagem"
              />
              <MeasureSelect />
            </div>
            <div className="input-container">
              <input className="input" type="text" placeholder="Tarja" />
            </div>
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="Data da Receita"
              />
            </div>
          </div>
          <button className="button">Cadastrar</button>
        </div>
      </div>
    </div>
  );
}

export default NecessityRegistrationPage;
