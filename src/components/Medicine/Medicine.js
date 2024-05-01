import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import cookies from "../../utils/cookies";

import { deleteMedicine } from "../../apis/Medicine";

export default function Medicine({ medicine }) {
  const navigate = useNavigate();

  function deleteThisMedicine() {
    try {
      const id = `${medicine.cnes}-${medicine.drug}-${medicine.drugName}`;

      deleteMedicine(id).then(() => {
        console.log("Document deleted with success!");
        navigate("/home");
      });
    } catch (e) {
      console.log("Error to delete document: ", e);
    }
  }

  function editThisMedicine() {
    cookies.setCookie(
      "@doemed/medicine-in-edit",
      JSON.stringify(medicine),
      null
    );

    navigate("/editar-medicamento");
  }

  function renderTarge() {
    switch (medicine.targe) {
      case "Amarela":
        return <div className="medicine-targe yellow"></div>;
      case "Vermelha":
        return <div className="medicine-targe red"></div>;
      case "Preta":
        return <div className="medicine-targe black"></div>;
      default:
        return <div className="medicine-targe"></div>;
    }
  }

  return (
    <div className="medicine-container">
      <div className="information-row">
        <span className="medicine-title">
          {medicine.drugName} - {medicine.dosage.quantity}
          {medicine.dosage.measure}
        </span>
        {renderTarge()}
      </div>
      <div className="information-row">
        <span className="medicine-text">{medicine.drug}</span>
        <div className="medicine-text right">
          {medicine.quantityInStock} unidades
        </div>
      </div>
      <div className="buttons">
        <button
          className="button"
          onClick={() => {
            deleteThisMedicine();
          }}
        >
          Excluir
        </button>
        <button
          className="button"
          onClick={() => {
            editThisMedicine();
          }}
        >
          Editar
        </button>
      </div>
    </div>
  );
}
