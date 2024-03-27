import React from "react";
import "./styles.css";

import Header from "../../components/Header/Header";
import MeasureSelect from "../../components/MeasureSelect/MeasureSelect";

function MedicineEditPage() {
  return (
    <div className="medicine-edit-page">
      <Header />

      <div className="page-title">Edite seu medicamento</div>

      <div className="medicine-edit-page-content">
        <div className="form-medicine-edit-container">
          <div className="form-inputs">
            <div className="input-container">
              <input className="input" type="text" placeholder="Fármaco" disabled />
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
                type="number"
                min={0}
                placeholder="Quantidade em Estoque"
              />
            </div>
          </div>
          <button className="button">Finalizar Edição</button>
        </div>
      </div>
    </div>
  );
}

export default MedicineEditPage;
