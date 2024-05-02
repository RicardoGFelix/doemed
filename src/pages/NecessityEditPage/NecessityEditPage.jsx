import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./styles.css";

import Header from "../../components/Header/Header";
import MeasureSelect from "../../components/MeasureSelect/MeasureSelect";
import TargeSelect from "../../components/TargeSelect/TargeSelect";

import cookies from "../../utils/cookies";
import validations from "../../utils/validations";
import { updateNecessity } from "../../apis/Necessity";

function NecessityEditPage() {
  const navigate = useNavigate();

  var necessityInEdit = JSON.parse(
    cookies.getCookie("@doemed/necessity-in-edit")
  );

  const [dosageQuantity, setDosageQuantity] = useState("");

  useEffect(() => {
    setDosageQuantity(necessityInEdit.dosage.quantity);
  }, []);

  function edit() {
    const measure = cookies.getCookie("@doemed/measure_necessity")
      ? cookies.getCookie("@doemed/measure_necessity")
      : necessityInEdit.dosage.measure;
    const targe = cookies.getCookie("@doemed/targe_necessity")
      ? cookies.getCookie("@doemed/targe_necessity")
      : necessityInEdit.targe;

    const dosage = { quantity: dosageQuantity, measure: measure };

    if (
      validations.validateInput(dosageQuantity) &&
      validations.validateInput(measure) &&
      validations.validateInput(targe) &&
      (JSON.stringify(necessityInEdit.dosage) !== JSON.stringify(dosage) ||
        necessityInEdit.targe !== targe)
    ) {
      const data = {
        cpf: necessityInEdit.cpf,
        creator: necessityInEdit.creator,
        drug: necessityInEdit.drug,
        drugName: necessityInEdit.drugName,
        dosage: dosage,
        targe: targe,
        status: necessityInEdit.status,
        recipeDate: necessityInEdit.recipeDate,
      };

      const id = `${necessityInEdit.cpf}-${necessityInEdit.drug}-${necessityInEdit.drugName}`;

      updateNecessity(id, data)
        .then(() => {
          console.log("Document written with success!");

          cookies.deleteCookie("@doemed/measure_necessity");
          cookies.deleteCookie("@doemed/targe_necessity");
          cookies.deleteCookie("@doemed/necessity-in-edit")

          navigate("/home");
        })
        .catch((e) => {
          console.log("Error to write document: ", e);
        });
    }
  }

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
                value={necessityInEdit.drug}
                disabled
              />
            </div>
            <div className="input-container">
              <input
                id="drug_name_input"
                className="input"
                type="text"
                value={necessityInEdit.drugName}
                placeholder="Nome do Medicamento"
                disabled
              />
            </div>
            <div className="input-container">
              <input
                id="dosage_input"
                className="input dosage"
                type="text"
                value={dosageQuantity}
                onChange={(event) => setDosageQuantity(event.target.value)}
                placeholder="Dosagem"
              />
              <MeasureSelect />
            </div>
            <div className="input-container">
              <TargeSelect />
            </div>
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="Data da Receita"
                value={necessityInEdit.recipeDate}
                disabled
              />
            </div>
          </div>
          <button
            className="button"
            onClick={() => {
              edit();
            }}
          >
            Finalizar Edição
          </button>
        </div>
      </div>
    </div>
  );
}

export default NecessityEditPage;
