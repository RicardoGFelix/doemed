import React, { useEffect, useState } from "react";
import "./styles.css";

import Header from "../../components/Header/Header";
import Medicine from "../../components/Medicine/Medicine";

import cookies from "../../utils/cookies";
import { getMyMedicines } from "../../apis/Medicine";

function MedicineStockPage() {
  const [medicines, setMedicines] = useState([]);

  var currentUser = JSON.parse(cookies.getCookie("@doemed/current-user"));

  useEffect(() => {
    getMyMedicines(currentUser.cnes).then((result) => {
      setMedicines(result);
    });
  }, []);

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
          {medicines.map((medicine) => {
            return (
              <Medicine
                key={`${medicine.cnes}-${medicine.drug}-${medicine.drugName}`}
                medicine={medicine}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MedicineStockPage;
