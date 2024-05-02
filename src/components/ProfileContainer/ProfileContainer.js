import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import cookies from "../../utils/cookies";

export default function ProfileContainer() {
  const navigate = useNavigate();
  var currentUser = JSON.parse(cookies.getCookie("@doemed/current-user"));

  return (
    <div className="profile-container">
      <div className="information-row">
        <span className="necessity-text">
          <b>Nome Completo: </b>
          {currentUser?.name}
        </span>
      </div>
      <div className="information-row">
        <span className="necessity-text">
          <b>Data de Nascimento: </b>
          {currentUser?.birthdate}
        </span>
      </div>
      <div className="information-row">
        <span className="necessity-text">
          <b>Cidade: </b>
          {currentUser?.locality?.city} - {currentUser?.locality?.state}
        </span>
      </div>
      <div className="information-row">
        <span className="necessity-text">
          <b>E-mail: </b>
          {currentUser?.email}
        </span>
      </div>
      <button className="button" onClick={() => {navigate("/editar-perfil")}}>Editar</button>
    </div>
  );
}
