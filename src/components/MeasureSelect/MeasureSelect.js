import PrincipalColorArrowIcon from "../../assets/PrincipalColorArrowIcon.svg";
import "./styles.css";

import cookies from "../../utils/cookies";
import { useEffect } from "react";

export default function MeasureSelect() {
  var measures = ["mg", "g", "kg", "ml", "l"];

  var necessityInEdit = JSON.parse(
    cookies.getCookie("@doemed/necessity-in-edit")
  );

  useEffect(() => {
    var selectedMeasureValue = document.getElementById(
      "selected_measure_value"
    );
    var measureOptions = document.getElementById("measures");
    var inputsMeasureOptions = document.querySelectorAll(
      ".measure-option input"
    );

    inputsMeasureOptions.forEach((inputMeasure) => {
      inputMeasure.addEventListener("click", (event) => {
        selectedMeasureValue.textContent = inputMeasure.value;

        cookies.setCookie(
          "@doemed/measure_necessity",
          inputMeasure.dataset.label,
          null
        );

        const isMouseTouch =
          event.pointerType === "mouse" || event.pointerType === "touch";

        if (isMouseTouch) measureOptions.checked = false;
      });
    });
  }, []);

  return (
    <div id="measure_select" className="select measure">
      <div className="measure-select">
        <input type="checkbox" id="measures" />

        <div className="select-button">
          <div id="selected_measure_value" className="selected-value">
            {necessityInEdit?.dosage?.measure
              ? necessityInEdit.dosage.measure
              : "Medida"}
          </div>

          <div className="chevron">
            <img
              className="select-arrow"
              src={PrincipalColorArrowIcon}
              alt="Ícone de Seta"
            />
          </div>
        </div>
      </div>

      <ul className="measures-options">
        {measures.map((measure) => {
          return (
            <li key={measure} className="measure-option">
              <input
                type="radio"
                name="measure"
                className="measure-input"
                value={measure}
                data-label={measure}
              />
              <span className="option-label">{measure}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
