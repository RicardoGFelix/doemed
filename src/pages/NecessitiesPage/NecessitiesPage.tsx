import React from "react";
import "./styles.css";

import Header from "../../components/Header/Header";
import Necessity from "../../components/Necessity/Necessity";

function NecessitiesPage() {
  return (
    <div className="necessities-page">
      <Header />

      <div className="page-title">Necessidades</div>

      <div className="necessities-page-content">
        <div className="search-container">
          <input className="input" type="text" placeholder="Pesquisar" />
          <button className="search-button"></button>
        </div>
        <div className="necessities-list">
          <Necessity />
        </div>
      </div>
    </div>
  );
}

export default NecessitiesPage;
