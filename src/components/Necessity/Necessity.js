import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import functions from "../../utils/functions";
import cookies from "../../utils/cookies";

import { createNotification } from "../../apis/Notification";
import { updateNecessity } from "../../apis/Necessity";

export default function Necessity({ necessity }) {
  const navigate = useNavigate();

  var currentUser = JSON.parse(cookies.getCookie("@doemed/current-user"));

  function getYearsOld() {
    return functions.calculateYearsOld(necessity.creator.birthdate);
  }

  function sendNotification() {
    const data = {
      patientCPF: necessity.cpf,
      drugName: necessity.drugName,
      timestamp: Date.now(),
      attendedBy: currentUser.institutionName,
    };

    const id = `${data.patientCPF}-${data.drugName}-${data.attendedBy}-${data.timestamp}`;

    createNotification(data, id)
      .then(() => {
        console.log("Document written with success!");
        navigate("/home");
      })
      .catch((e) => {
        console.log("Error to write document: ", e);
      });
  }

  function attendNecessity() {
    const data = {
      cpf: necessity.cpf,
      creator: necessity.creator,
      drug: necessity.drug,
      drugName: necessity.drugName,
      dosage: necessity.dosage,
      targe: necessity.targe,
      status: "Atendida",
      recipeDate: necessity.recipeDate,
    };

    const id = `${necessity.cpf}-${necessity.drug}-${necessity.drugName}`;

    updateNecessity(id, data)
      .then(async () => {
        console.log("Document written with success!");

        await sendNotification();

        navigate("/home");
      })
      .catch((e) => {
        console.log("Error to write document: ", e);
      });
  }

  return (
    <div className="necessity-container">
      <div className="information-row">
        <span className="necessity-title">
          {necessity.creator.name}, {getYearsOld()} anos,{" "}
          {necessity.creator.locality.city} - {necessity.creator.locality.state}
        </span>
      </div>
      <div className="information-row">
        <span className="necessity-text">
          <b>Necessidade: </b>
          {necessity.drugName} - {necessity.dosage.quantity}
          {necessity.dosage.measure}
        </span>
      </div>
      <button
        className="button"
        onClick={() => {
          attendNecessity();
        }}
      >
        Atender Necessidade
      </button>
    </div>
  );
}
