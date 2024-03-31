import React from "react";
import "./styles.css";

import Header from "../../components/Header/Header";
import HealthcareInstitution from "../../components/HealthcareInstitution/HealthcareInstitution";

function SearchHealthcareInstitutionPage() {
  return (
    <div className="search-healthcare-institution-page">
      <Header />

      <div className="page-title">Pesquise por uma Instituição de Saúde</div>

      <div className="search-healthcare-institution-page-content">
        <div className="search-container">
          <input className="input" type="text" placeholder="Pesquisar" />
          <button className="search-button"></button>
        </div>
        <div className="healthcare-institution-list">
          <HealthcareInstitution />
        </div>
      </div>
    </div>
  );
}

export default SearchHealthcareInstitutionPage;
