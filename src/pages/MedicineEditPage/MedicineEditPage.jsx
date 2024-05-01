import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

import Header from "../../components/Header/Header";
import MeasureMedicineSelect from "../../components/MeasureMedicineSelect/MeasureMedicineSelect";

import cookies from "../../utils/cookies";
import validations from "../../utils/validations";
import { updateMedicine } from "../../apis/Medicine";
import TargeMedicineSelect from "../../components/TargeMedicineSelect/TargeMedicineSelect";

function MedicineEditPage() {
  const navigate = useNavigate();

  var medicineInEdit = JSON.parse(
    cookies.getCookie("@doemed/medicine-in-edit")
  );

  const [dosageQuantity, setDosageQuantity] = useState("");
  const [quantityInStock, setQuantityInStock] = useState("");

  useEffect(() => {
    setDosageQuantity(medicineInEdit.dosage.quantity);
    setQuantityInStock(medicineInEdit.quantityInStock);
  }, []);

  function edit() {
    const measure = cookies.getCookie("@doemed/measure_medicine")
      ? cookies.getCookie("@doemed/measure_medicine")
      : medicineInEdit.dosage.measure;
    const targe = cookies.getCookie("@doemed/targe_medicine")
      ? cookies.getCookie("@doemed/targe_medicine")
      : medicineInEdit.targe;

    const dosage = { quantity: dosageQuantity, measure: measure };

    if (
      validations.validateInput(dosageQuantity) &&
      validations.validateInput(measure) &&
      validations.validateInput(targe) &&
      validations.validateInput(quantityInStock) &&
      (JSON.stringify(medicineInEdit.dosage) !== JSON.stringify(dosage) ||
        medicineInEdit.targe !== targe ||
        medicineInEdit.quantityInStock !== quantityInStock)
    ) {
      const data = {
        cnes: medicineInEdit.cnes,
        drug: medicineInEdit.drug,
        drugName: medicineInEdit.drugName,
        dosage: dosage,
        targe: targe,
        quantityInStock: quantityInStock,
      };

      const id = `${medicineInEdit.cnes}-${medicineInEdit.drug}-${medicineInEdit.drugName}`;

      updateMedicine(id, data)
        .then(() => {
          console.log("Document written with success!");

          cookies.deleteCookie("@doemed/measure_medicine");
          cookies.deleteCookie("@doemed/targe_medicine");
          cookies.deleteCookie("@doemed/medicine-in-edit");

          navigate("/home");
        })
        .catch((e) => {
          console.log("Error to write document: ", e);
        });
    }
  }

  return (
    <div className="medicine-edit-page">
      <Header />

      <div className="page-title">Edite seu medicamento</div>

      <div className="medicine-edit-page-content">
        <div className="form-medicine-edit-container">
          <div className="form-inputs">
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="Fármaco"
                value={medicineInEdit.drug}
                disabled
              />
            </div>
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="Nome do Medicamento"
                value={medicineInEdit.drugName}
                disabled
              />
            </div>
            <div className="input-container">
              <input
                className="input dosage"
                type="text"
                placeholder="Dosagem"
                value={dosageQuantity}
                onChange={(event) => setDosageQuantity(event.target.value)}
              />
              <MeasureMedicineSelect />
            </div>
            <div className="input-container">
              <TargeMedicineSelect />
            </div>
            <div className="input-container">
              <input
                className="input"
                type="number"
                min={0}
                placeholder="Quantidade em Estoque"
                value={quantityInStock}
                onChange={(event) => setQuantityInStock(event.target.value)}
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

export default MedicineEditPage;
