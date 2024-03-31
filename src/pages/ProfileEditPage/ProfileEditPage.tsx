import React from "react";
import "./styles.css";

import Header from "../../components/Header/Header";
import LocalityProfileEditContainer from "../../components/LocalityProfileEditContainer/LocalityProfileEditContainer";

function ProfileEditPage() {
  return (
    <div className="profile-edit-page">
      <Header />

      <div className="page-title">Edite seu perfil</div>

      <div className="profile-edit-page-content">
        <div className="form-profile-edit-container">
          <div className="form-inputs">
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="CPF"
                value={"439.100.740-14"}
                disabled
              />
            </div>
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="Nome Completo"
                value={"José da Silva"}
                disabled
              />
            </div>
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="Data de Nascimento"
                value={"07/07/1957"}
                disabled
              />
            </div>
            <div className="input-container">
              <LocalityProfileEditContainer />
            </div>
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="E-mail"
                value={"josedasilva@gmail.com"}
              />
            </div>
          </div>
          <button className="button">Finalizar Edição</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileEditPage;
