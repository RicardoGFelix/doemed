import React from "react";
import "./styles.css";

export default function Necessity() {
  return (
    <div className="necessity-container">
      <div className="information-row">
        <span className="necessity-title">
          José da Silva, 65 anos, Campina Grande-PB
        </span>
      </div>
      <div className="information-row">
        <span className="necessity-text">
          <b>Necessidade: </b>Rivotril - 0,5mg
        </span>
      </div>
      <button className="button">Atender Necessidade</button>
    </div>
  );
}
