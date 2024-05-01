import React, { useEffect, useState } from "react";
import "./styles.css";

import Header from "../../components/Header/Header";
import HealthcareInstitution from "../../components/HealthcareInstitution/HealthcareInstitution";

import { getHealthcareInstitutions } from "../../apis/HealthcareInstitution";

import validations from "../../utils/validations";

function SearchHealthcareInstitutionPage() {
  const [healthcareInstitutions, setHealthcareInstitutions] = useState([]);
  const [filteredHealthcareInstitutions, setFilteredHealthcareInstitutions] =
    useState([]);

  useEffect(() => {
    getHealthcareInstitutions().then((result) => {
      setHealthcareInstitutions(result);
      setFilteredHealthcareInstitutions(result);
    });
  }, []);

  function search() {
    const searchValue = document.getElementById("search_input");

    const filteredInstitutions = healthcareInstitutions.filter((institution) =>
      institution.institutionName.includes(searchValue.value)
    );

    setFilteredHealthcareInstitutions(filteredInstitutions);
  }

  return (
    <div className="search-healthcare-institution-page">
      <Header />

      <div className="page-title">Pesquise por uma Instituição de Saúde</div>

      <div className="search-healthcare-institution-page-content">
        <div className="search-container">
          <input
            id="search_input"
            className="input"
            type="text"
            placeholder="Pesquisar"
          />
          <button
            className="search-button"
            onClick={() => {
              search();
            }}
          ></button>
        </div>
        <div className="healthcare-institution-list">
          {filteredHealthcareInstitutions.map((healthcareInstitution) => {
            return (
              <HealthcareInstitution
                key={healthcareInstitution.email}
                healthcareInstitution={healthcareInstitution}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchHealthcareInstitutionPage;
