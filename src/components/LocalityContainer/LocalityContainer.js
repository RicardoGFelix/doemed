import { useEffect, useState } from "react";
import WhiteArrowIcon from "../../assets/WhiteArrowIcon.svg";
import "./styles.css";

import cookies from "../../utils/cookies";

export default function LocalityContainer() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  async function fetchStates() {
    try {
      const response = await fetch(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );

      const data = await response.json();

      setStates(data);
    } catch (error) {
      console.error("Erro ao buscar estados: ", error);
    }
  }

  async function fetchCities() {
    try {
      let selectedState = cookies.getCookie("@doemed/state_register");

      if (selectedState) {
        cookies.deleteCookie("@doemed/city_register");

        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`
        );

        const data = await response.json();

        setCities(data);
      }
    } catch (error) {
      console.error("Erro ao buscar estados: ", error);
    }
  }

  useEffect(() => {
    try {
      fetchStates();
    } catch (error) {
      console.error("Erro ao buscar estados: ", error);
    }
  }, []);

  var selectedStateValue = document.getElementById("selected_state_value");
  var stateOptions = document.getElementById("states");
  var inputsStateOptions = document.querySelectorAll(".state-option input");

  var selectedCityValue = document.getElementById("selected_city_value");
  var cityOptions = document.getElementById("cities");
  var inputsCityOptions = document.querySelectorAll(".city-option input");

  inputsStateOptions.forEach((inputState) => {
    inputState.addEventListener("click", (event) => {
      selectedStateValue.textContent = inputState.dataset.label;
      selectedCityValue.textContent = "Cidade";
      
      cookies.setCookie(
        "@doemed/state_register",
        inputState.dataset.label,
        null
      );

      fetchCities();

      const isMouseTouch =
        event.pointerType === "mouse" || event.pointerType === "touch";

      if (isMouseTouch) stateOptions.checked = false;
    });
  });

  inputsCityOptions.forEach((inputCity) => {
    inputCity.addEventListener("click", (event) => {
      selectedCityValue.textContent = inputCity.dataset.label;
      
      cookies.setCookie("@doemed/city_register", inputCity.dataset.label, null);

      const isMouseTouch =
        event.pointerType === "mouse" || event.pointerType === "touch";

      if (isMouseTouch) cityOptions.checked = false;
    });
  });

  return (
    <div className="input-container">
      <div id="state_select" className="select state">
        <div className="state-select">
          <input type="checkbox" id="states" />

          <div className="select-button">
            <div id="selected_state_value" className="selected-value">
              Estado
            </div>

            <div className="chevron">
              <img
                className="select-arrow"
                src={WhiteArrowIcon}
                alt="Ícone de Seta"
              />
            </div>
          </div>
        </div>

        <ul className="states-options">
          {states.map((state) => {
            return (
              <li key={state.id} className="state-option">
                <input
                  type="radio"
                  name="state"
                  className="state-input"
                  value={state}
                  data-label={state.sigla}
                />
                <span className="option-label">{state.sigla}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div id="city_select" className="select city">
        <div className="city-select">
          <input type="checkbox" id="cities" />

          <div className="select-button">
            <div id="selected_city_value" className="selected-value">
              Cidade
            </div>

            <div className="chevron">
              <img
                className="select-arrow"
                src={WhiteArrowIcon}
                alt="Ícone de Seta"
              />
            </div>
          </div>
        </div>

        <ul className="cities-options">
          {cities.map((city) => {
            return (
              <li key={city.id} className="city-option">
                <input
                  type="radio"
                  name="city"
                  className="city-input"
                  value={city}
                  data-label={city.nome}
                />
                <span className="option-label">{city.nome}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
