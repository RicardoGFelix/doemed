import React from "react";
import "./styles.css";

export default function HealthcareInstitution({ healthcareInstitution }) {
  function copy(value) {
    navigator.clipboard.writeText(value);
  }

  return (
    <div className="healthcare-institution-container">
      <div className="information-row">
        <span className="healthcare-institution-title">
          {healthcareInstitution.institutionName}
        </span>
      </div>
      <div className="information-row">
        <span className="healthcare-institution-text">
          {`${healthcareInstitution.locality.address}, ${healthcareInstitution.locality.city} - ${healthcareInstitution.locality.state}`}
        </span>
        <button
          className="copy-button"
          onClick={() => {
            copy(
              `${healthcareInstitution.locality.address}, ${healthcareInstitution.locality.city} - ${healthcareInstitution.locality.state}`
            );
          }}
        ></button>
      </div>
      <div className="information-row">
        <span className="healthcare-institution-text">
          {healthcareInstitution.phone}
        </span>
        <button
          className="copy-button"
          onClick={() => {
            copy(healthcareInstitution.phone);
          }}
        ></button>
      </div>
      <div className="information-row">
        <span className="healthcare-institution-text">
          {healthcareInstitution.openingHours}
        </span>
      </div>
    </div>
  );
}
