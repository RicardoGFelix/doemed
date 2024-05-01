import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import Header from "../../components/Header/Header";
import MeasureMedicineSelect from "../../components/MeasureMedicineSelect/MeasureMedicineSelect";
import TargeMedicineSelect from "../../components/TargeMedicineSelect/TargeMedicineSelect";

import cookies from "../../utils/cookies";
import validations from "../../utils/validations";

import { createMedicine } from "../../apis/Medicine";

function MedicineRegistrationPage() {
  const navigate = useNavigate();
  var currentUser = JSON.parse(cookies.getCookie("@doemed/current-user"));

  function registerMedicine() {
    const drug = document.getElementById("drug_input");
    const drugName = document.getElementById("drug_name_input");
    const dosageQuantity = document.getElementById("dosage_input");
    const measure = cookies.getCookie("@doemed/measure_medicine");
    const targe = cookies.getCookie("@doemed/targe_medicine");
    const quantityInStock = document.getElementById("quantity_in_stock_input");

    if (
      validations.validateInput(drug.value) &&
      validations.validateInput(drugName.value) &&
      validations.validateInput(dosageQuantity.value) &&
      validations.validateInput(measure) &&
      validations.validateInput(targe) &&
      validations.validateInput(quantityInStock.value)
    ) {
      const dosage = { quantity: dosageQuantity.value, measure: measure };

      const data = {
        cnes: currentUser.cnes,
        drug: drug.value,
        drugName: drugName.value,
        dosage: dosage,
        targe: targe,
        quantityInStock: quantityInStock.value,
      };

      const id = `${data.cnes}-${data.drug}-${data.drugName}`;

      createMedicine(data, id)
        .then((s) => {
          console.log("Document written with success!");

          cookies.deleteCookie("@doemed/measure_medicine");
          cookies.deleteCookie("@doemed/targe_medicine");

          navigate("/home");
        })
        .catch((e) => {
          console.log("Error to write document: ", e);
        });
    }
  }

  return (
    <div className="medicine-registration-page">
      <Header />

      <div className="page-title">Cadastre seu medicamento</div>

      <div className="medicine-registration-page-content">
        <div className="form-medicine-registration-container">
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
              <MeasureMedicineSelect />
            </div>
            <div className="input-container">
              <TargeMedicineSelect />
            </div>
            <div className="input-container">
              <input
                id="quantity_in_stock_input"
                className="input"
                type="number"
                min={0}
                placeholder="Quantidade em Estoque"
              />
            </div>
          </div>
          <button
            className="button"
            onClick={() => {
              registerMedicine();
            }}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default MedicineRegistrationPage;
