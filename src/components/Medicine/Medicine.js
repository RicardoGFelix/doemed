import React from "react";
import "./styles.css";

export default function Medicine() {
  return (
    <div className="medicine-container">
      <div className="information-row">
        <span className="medicine-title">Rivotril - 0,5mg</span>
        <div className="medicine-targe black"></div>
      </div>
      <div className="information-row">
        <span className="medicine-text">Rivotril - 0,5mg</span>
        <div className="medicine-text right">43 unidades</div>
      </div>
      <div className="buttons">
        <button className="button">Excluir</button>
        <button className="button">Editar</button>
      </div>
    </div>
  );
}
