import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

import Header from "../../components/Header/Header";
import LocalityProfileEditContainer from "../../components/LocalityProfileEditContainer/LocalityProfileEditContainer";

import cookies from "../../utils/cookies";
import validations from "../../utils/validations";

import { updateCitizen } from "../../apis/Citizen";

function ProfileEditPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  var currentUser = JSON.parse(cookies.getCookie("@doemed/current-user"));

  useEffect(() => {
    setName(currentUser.name);
  }, []);

  function edit() {
    const state = cookies.getCookie("@doemed/state_edit")
      ? cookies.getCookie("@doemed/state_edit")
      : currentUser.locality.state;
    const city = cookies.getCookie("@doemed/city_edit")
      ? cookies.getCookie("@doemed/city_edit")
      : currentUser.locality.city;

    const locality = { state: state, city: city };

    if (
      validations.validateInput(name) &&
      validations.validateInput(state) &&
      validations.validateInput(city) &&
      currentUser?.email &&
      (JSON.stringify(currentUser.locality) !== JSON.stringify(locality) ||
        currentUser.name !== name)
    ) {
      const data = {
        cpf: currentUser.cpf,
        name: name,
        birthdate: currentUser.birthdate,
        locality: locality,
        email: currentUser.email,
      };

      updateCitizen(currentUser?.email, data)
        .then((s) => {
          console.log("Document updated with success!");
          
          cookies.setCookie("@doemed/current-user", JSON.stringify(data), null);

          cookies.deleteCookie("@doemed/state_edit");
          cookies.deleteCookie("@doemed/city_edit");

          navigate("/home");
        })
        .catch((e) => {
          console.log("Error to update document: ", e);
        });
    }
  }

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
                value={currentUser?.cpf}
                disabled
              />
            </div>
            <div className="input-container">
              <input
                id="name_input"
                className="input"
                type="text"
                placeholder="Nome Completo"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="Data de Nascimento"
                value={currentUser?.birthdate}
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
                value={currentUser?.email}
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

export default ProfileEditPage;
