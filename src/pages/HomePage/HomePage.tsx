import React from "react";
import "./styles.css";

import Header from "../../components/Header/Header";

import AddMedicineIcon from "../../assets/AddMedicineIcon.svg";
import MedicineIcon from "../../assets/MedicineIcon.svg";
import HealthcareInstitutionIcon from "../../assets/HealthcareInstitutionIcon.svg";
import DocsIcon from "../../assets/DocsIcon.svg";

function HomePage() {
  return (
    <div className="home-page">
      <Header />

      <div className="page-title">
        Olá, <button className="profile-button">José da Silva!</button>
      </div>

      <div className="home-page-content">
        <div className="menu-home-page-container">
          <button className="menu-button">
            <img
              className="menu-button-image"
              src={AddMedicineIcon}
              alt="Ícone de Cadastro de Necessidade"
            />
            <span className="menu-button-title">Cadastrar Necessidade</span>
          </button>
          <button className="menu-button">
            <img
              className="menu-button-image"
              src={MedicineIcon}
              alt="Ícone de Necessidades"
            />
            <span className="menu-button-title">Minhas Necessidades</span>
          </button>
          <button className="menu-button">
            <img
              className="menu-button-image"
              src={HealthcareInstitutionIcon}
              alt="Ícone de Instituição de Saúde"
            />
            <span className="menu-button-title">
              Pesquisar Instituição de Saúde
            </span>
          </button>
          <button className="menu-button">
            <img
              className="menu-button-image"
              src={DocsIcon}
              alt="Ícone de Manuais"
            />
            <span className="menu-button-title">Manuais</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
