import React from "react";
import "./styles.css";

import Header from "../../components/Header/Header";
import MeasureSelect from "../../components/MeasureSelect/MeasureSelect";

function NecessityEditPage() {
  return (
    <div className="necessity-edit-page">
      <Header />

      <div className="page-title">Edite sua necessidade</div>

      <div className="necessity-edit-page-content">
        <div className="form-necessity-edit-container">
          <div className="form-inputs">
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="Fármaco"
                disabled
              />
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
                disabled
              />
            </div>
          </div>
          <button className="button">Cadastrar</button>
        </div>
      </div>
    </div>
  );
}

export default NecessityEditPage;
