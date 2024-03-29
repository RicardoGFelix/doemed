import React from "react";
import "./styles.css";

export default function MyNecessity() {
  return (
    <div className="my-necessity-container">
      <div className="information-row">
        <span className="my-necessity-title">Rivotril - 0,5mg</span>
        <div className="my-necessity-targe black"></div>
      </div>
      <div className="information-row">
        <span className="my-necessity-text">Rivotril - 0,5mg</span>
        <div className="my-necessity-status opened">Em aberto</div>
      </div>
      <div className="information-row">
        <span className="my-necessity-text">18/10/2023</span>
      </div>
      <div className="buttons">
        <button className="button">Excluir</button>
        <button className="button">Editar</button>
      </div>
    </div>
  );
}
