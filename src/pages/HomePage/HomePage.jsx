import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import Header from "../../components/Header/Header";

import AddMedicineIcon from "../../assets/AddMedicineIcon.svg";
import MedicineIcon from "../../assets/MedicineIcon.svg";
import HealthcareInstitutionIcon from "../../assets/HealthcareInstitutionIcon.svg";
import DocsIcon from "../../assets/DocsIcon.svg";
import StockIcon from "../../assets/StockIcon.svg";

import cookies from "../../utils/cookies";

function HomePage() {
  const navigate = useNavigate();
  var currentUser = JSON.parse(cookies.getCookie("@doemed/current-user"));

  function renderTitle() {
    if (currentUser?.cpf) {
      return (
        <div className="page-title">
          Olá,{" "}
          <button
            className="profile-button"
            onClick={() => {
              navigate("/meu-perfil");
            }}
          >
            {currentUser.name}!
          </button>
        </div>
      );
    } else if (currentUser?.cnes) {
      return <div className="page-title">Olá!</div>;
    }
  }

  function renderMenu() {
    if (currentUser?.cpf) {
      return (
        <div className="home-page-content">
          <div className="menu-home-page-container">
            <button
              className="menu-button"
              onClick={() => {
                navigate("/criar-necessidade");
              }}
            >
              <img
                className="menu-button-image"
                src={AddMedicineIcon}
                alt="Ícone de Cadastro de Necessidade"
              />
              <span className="menu-button-title">Cadastrar Necessidade</span>
            </button>
            <button
              className="menu-button"
              onClick={() => {
                navigate("/minhas-necessidades");
              }}
            >
              <img
                className="menu-button-image"
                src={MedicineIcon}
                alt="Ícone de Necessidades"
              />
              <span className="menu-button-title">Minhas Necessidades</span>
            </button>
            <button
              className="menu-button"
              onClick={() => {
                navigate("/buscar-instituicao-de-saude");
              }}
            >
              <img
                className="menu-button-image"
                src={HealthcareInstitutionIcon}
                alt="Ícone de Instituição de Saúde"
              />
              <span className="menu-button-title">
                Pesquisar Instituição de Saúde
              </span>
            </button>
            <button
              className="menu-button"
              onClick={() => {
                navigate("/manuais");
              }}
            >
              <img
                className="menu-button-image"
                src={DocsIcon}
                alt="Ícone de Manuais"
              />
              <span className="menu-button-title">Manuais</span>
            </button>
          </div>
        </div>
      );
    } else if (currentUser?.cnes) {
      return (
        <div className="home-page-content">
          <div className="menu-home-page-container">
            <button
              className="menu-button"
              onClick={() => {
                navigate("/criar-medicamento");
              }}
            >
              <img
                className="menu-button-image"
                src={AddMedicineIcon}
                alt="Ícone de Cadastro de Medicamento"
              />
              <span className="menu-button-title">Cadastrar Medicamento</span>
            </button>
            <button
              className="menu-button"
              onClick={() => {
                navigate("/necessidades");
              }}
            >
              <img
                className="menu-button-image"
                src={MedicineIcon}
                alt="Ícone de Necessidades"
              />
              <span className="menu-button-title">Necessidades</span>
            </button>
            <button
              className="menu-button"
              onClick={() => {
                navigate("/medicamentos");
              }}
            >
              <img
                className="menu-button-image"
                src={StockIcon}
                alt="Ícone de Estoque"
              />
              <span className="menu-button-title">Estoque de Medicamentos</span>
            </button>
            <button
              className="menu-button"
              onClick={() => {
                navigate("/manuais");
              }}
            >
              <img
                className="menu-button-image"
                src={DocsIcon}
                alt="Ícone de Manuais"
              />
              <span className="menu-button-title">Manuais</span>
            </button>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="home-page">
      <Header />

      {renderTitle()}

      {renderMenu()}
    </div>
  );
}

export default HomePage;
