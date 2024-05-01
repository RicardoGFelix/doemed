import React, { useEffect, useState } from "react";
import "./styles.css";

import Header from "../../components/Header/Header";
import MyNecessity from "../../components/MyNecessity/MyNecessity";

import cookies from "../../utils/cookies";

import { getMyNecessities } from "../../apis/Necessity";

function MyNecessitiesPage() {
  const [necessities, setNecessities] = useState([]);

  var currentUser = JSON.parse(cookies.getCookie("@doemed/current-user"));

  useEffect(() => {
    getMyNecessities(currentUser.cpf).then((result) => {
      setNecessities(result);
    });
  }, []);

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
          {necessities.map((necessity) => {
            return (
              <MyNecessity
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

export default MyNecessitiesPage;
