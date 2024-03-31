import React from "react";
import "./styles.css";

export default function ProfileContainer() {
  return (
    <div className="profile-container">
      <div className="information-row">
        <span className="necessity-text">
          <b>Nome Completo: </b> José da Silva
        </span>
      </div>
      <div className="information-row">
        <span className="necessity-text">
          <b>Data de Nascimento: </b>07/07/1957
        </span>
      </div>
      <div className="information-row">
        <span className="necessity-text">
          <b>Cidade: </b>Campina Grande - PB
        </span>
      </div>
      <div className="information-row">
        <span className="necessity-text">
          <b>E-mail: </b>josedasilva@gmail.com
        </span>
      </div>
      <button className="button">Editar</button>
    </div>
  );
}
