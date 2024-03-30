import React from "react";
import "./styles.css";

import Header from "../../components/Header/Header";
import Medicine from "../../components/Medicine/Medicine";

function MedicineStockPage() {
  return (
    <div className="medicine-stock-page">
      <Header />

      <div className="page-title">Seu estoque de medicamentos</div>

      <div className="medicine-stock-page-content">
        <div className="search-container">
          <input className="input" type="text" placeholder="Pesquisar" />
          <button className="search-button"></button>
        </div>
        <div className="medicine-list">
          <Medicine />
        </div>
      </div>
    </div>
  );
}

export default MedicineStockPage;
