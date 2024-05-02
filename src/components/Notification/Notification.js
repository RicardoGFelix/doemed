import React from "react";

import "./styles.css";

import NotificationIcon from "../../assets/NotificationIcon.svg";
import PrincipalColorArrowIcon from "../../assets/PrincipalColorArrowIcon.svg";

import functions from "../../utils/functions";

export default function Notification({ notification }) {
  function toggleNotification(element) {
    let notification = element?.parentNode?.parentNode?.parentNode;

    if (notification?.classList.contains("opened")) {
      notification.classList.remove("opened");
    } else {
      notification?.classList.add("opened");
    }
  }

  return (
    <div className="notification-container">
      <div
        className="notification-header-container"
        onClick={(event) => {
          toggleNotification(event.target);
        }}
      >
        <figure className="notification-image-container">
          <img
            className="notification-image"
            src={NotificationIcon}
            alt="Ícone de Notificação"
          />
        </figure>
        <div className="notification-text-container">
          <span className="notification-title">
            Sua necessidade foi atendida!
          </span>
          <span className="notification-subtitle">
            {functions.calculateDate(notification.timestamp)}, às
            {functions.calculateTime(notification.timestamp)}
          </span>
        </div>
        <div className="chevron">
          <img
            className="button-arrow"
            src={PrincipalColorArrowIcon}
            alt="Ícone de Seta"
          />
        </div>
      </div>
      <p className="notification-content">
        Sua necessidade do medicamento {notification.drugName} foi atendida!
        Dirija-se até {notification.attendedBy} para coletar o medicamento.
      </p>
    </div>
  );
}
