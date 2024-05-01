import React, { useEffect, useState } from "react";
import "./styles.css";

import Header from "../../components/Header/Header";
import Necessity from "../../components/Necessity/Necessity";

import { getNecessities } from "../../apis/Necessity";

import validations from "../../utils/validations";

function NecessitiesPage() {
  const [necessities, setNecessities] = useState([]);
  const [filteredNecessities, setFilteredNecessities] = useState([]);

  useEffect(() => {
    getNecessities().then((result) => {
      setNecessities(
        result.filter((necessity) => necessity.status === "Em Aberto")
      );
      setFilteredNecessities(
        result.filter((necessity) => necessity.status === "Em Aberto")
      );
    });
  }, []);

  function search() {
    const searchValue = document.getElementById("search_input");

    const filteredItems = necessities.filter((necessity) =>
      necessity.drugName.includes(searchValue.value)
    );

    setFilteredNecessities(filteredItems);
  }

  return (
    <div className="necessities-page">
      <Header />

      <div className="page-title">Necessidades</div>

      <div className="necessities-page-content">
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
        <div className="necessities-list">
          {filteredNecessities.map((necessity) => {
            return (
              <Necessity
                key={`${necessity.cpf}-${necessity.drug}-${necessity.drugName}`}
                necessity={necessity}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NecessitiesPage;
