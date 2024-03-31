import React from "react";
import "./styles.css";

export default function HealthcareInstitution() {
  return (
    <div className="healthcare-institution-container">
      <div className="information-row">
        <span className="healthcare-institution-title">CLIPSI Hospital Geral de Campina Grande</span>
      </div>
      <div className="information-row">
        <span className="healthcare-institution-text">R. Treze de Maio, 366 - Centro, Campina Grande - PB, 58400-290</span>
        <button className="copy-button"></button>
      </div>
      <div className="information-row">
        <span className="healthcare-institution-text">(83) 3065-8000</span>
        <button className="copy-button"></button>
      </div>
      <div className="information-row">
        <span className="healthcare-institution-text">00:00 - 23:59</span>
      </div>
    </div>
  );
}
