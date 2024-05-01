import PrincipalColorArrowIcon from "../../assets/PrincipalColorArrowIcon.svg";
import "./styles.css";

import cookies from "../../utils/cookies";
import { useEffect } from "react";

export default function TargeSelect() {
  var targes = ["Sem Tarja", "Amarela", "Vermelha", "Preta"];

  var necessityInEdit = JSON.parse(
    cookies.getCookie("@doemed/necessity-in-edit")
  );

  useEffect(() => {
    var selectedTargeValue = document.getElementById("selected_targe_value");
    var targeOptions = document.getElementById("targes");
    var inputsTargeOptions = document.querySelectorAll(".targe-option input");

    inputsTargeOptions.forEach((inputTarge) => {
      inputTarge.addEventListener("click", (event) => {
        selectedTargeValue.textContent = inputTarge.dataset.label;

        cookies.setCookie(
          "@doemed/targe_necessity",
          inputTarge.dataset.label,
          null
        );

        const isMouseTouch =
          event.pointerType === "mouse" || event.pointerType === "touch";

        if (isMouseTouch) targeOptions.checked = false;
      });
    });
  }, []);

  return (
    <div id="targe_select" className="select targe">
      <div className="targe-select">
        <input type="checkbox" id="targes" />

        <div className="select-button">
          <div id="selected_targe_value" className="selected-value">
            {necessityInEdit?.targe ? necessityInEdit.targe : "Tarja" }
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

      <ul className="targes-options">
        {targes.map((targe) => {
          return (
            <li key={targe} className="targe-option">
              <input
                type="radio"
                name="targe"
                className="targe-input"
                value={targe}
                data-label={targe}
              />
              <span className="option-label">{targe}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
