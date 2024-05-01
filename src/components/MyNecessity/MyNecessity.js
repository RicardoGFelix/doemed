import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import { deleteNecessity } from "../../apis/Necessity";

import cookies from "../../utils/cookies";

export default function MyNecessity({ necessity }) {
  const navigate = useNavigate();

  function deleteThisNecessity() {
    try {
      const id = `${necessity.cpf}-${necessity.drug}-${necessity.drugName}`;

      deleteNecessity(id).then(() => {
        console.log("Document deleted with success!");
        navigate("/home");
      });
    } catch (e) {
      console.log("Error to delete document: ", e);
    }
  }

  function editThisNecessity() {
    cookies.setCookie(
      "@doemed/necessity-in-edit",
      JSON.stringify(necessity),
      null
    );

    navigate("/editar-necessidade");
  }

  function renderTarge() {
    switch (necessity.targe) {
      case "Amarela":
        return <div className="my-necessity-targe yellow"></div>;
      case "Vermelha":
        return <div className="my-necessity-targe red"></div>;
      case "Preta":
        return <div className="my-necessity-targe black"></div>;
      default:
        return <div className="my-necessity-targe"></div>;
    }
  }

  function renderStatus() {
    switch (necessity.status) {
      case "Atendida":
        return (
          <div className="my-necessity-status attended">{necessity.status}</div>
        );
      case "Preta":
        return (
          <div className="my-necessity-status denied">{necessity.status}</div>
        );
      default:
        return (
          <div className="my-necessity-status opened">{necessity.status}</div>
        );
    }
  }
  return (
    <div className="my-necessity-container">
      <div className="information-row">
        <span className="my-necessity-title">
          {necessity.drugName} - {necessity.dosage.quantity}
          {necessity.dosage.measure}
        </span>
        {renderTarge()}
      </div>
      <div className="information-row">
        <span className="my-necessity-text">{necessity.drug}</span>
        {renderStatus()}
      </div>
      <div className="information-row">
        <span className="my-necessity-text">{necessity.recipeDate}</span>
      </div>
      <div className="buttons">
        <button
          className="button"
          onClick={() => {
            deleteThisNecessity();
          }}
        >
          Excluir
        </button>
        <button
          className="button"
          onClick={() => {
            editThisNecessity();
          }}
        >
          Editar
        </button>
      </div>
    </div>
  );
}
