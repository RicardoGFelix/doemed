import React from "react";
import "./styles.css";

import Header from "../../components/Header/Header";
import MyNecessity from "../../components/MyNecessity/MyNecessity";

function MyNecessitiesPage() {
  return (
    <div className="my-necessities-page">
      <Header />

      <div className="page-title">Suas necessidades</div>

      <div className="my-necessities-page-content">
        <div className="search-container">
          <input className="input" type="text" placeholder="Pesquisar" />
          <button className="search-button"></button>
        </div>
        <div className="necessities-list">
          <MyNecessity />
        </div>
      </div>
    </div>
  );
}

export default MyNecessitiesPage;
