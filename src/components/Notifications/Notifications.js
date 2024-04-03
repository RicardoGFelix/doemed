import React from "react";
import "./styles.css";

import DoemedLogoPrincipalColor from "../../assets/DoemedLogoPrincipalColor.svg";
import NotificationIcon from "../../assets/NotificationIcon.svg";
import PrincipalColorArrowIcon from "../../assets/PrincipalColorArrowIcon.svg";

export default function Notifications() {
  function closeNotifications() {
    let notifications = document.getElementById("notifications_container");

    if (notifications) {
      notifications.classList.remove("opened");
    }
  }

  function toggleNotification(notificationId) {
    let notification = document.getElementById(notificationId);

    if (notification?.classList.contains("opened")) {
      notification.classList.remove("opened");
    } else {
      notification?.classList.add("opened");
    }
  }

  return (
    <div id="notifications_container" className="notifications-container">
      <div className="header-notifications-container">
        <figure className="logo-container">
          <img
            className="logo-image"
            src={DoemedLogoPrincipalColor}
            alt="Logo"
          />
        </figure>
        <button
          className="button-close"
          onClick={() => {
            closeNotifications();
          }}
        ></button>
      </div>
      <div className="notifications-title">Notificações</div>
      <div className="notifications">
        <div className="notification-container">
          <div className="notification-header-container">
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
                06/03/2024, às 15:46
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
            Sua necessidade do medicamento Clonazepam foi atendida! Dirija-se
            até CLIPSI Hospital Geral de Campina Grande para coletar o
            medicamento.
          </p>
        </div>

        <div className="notification-container">
          <div className="notification-header-container">
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
                06/03/2024, às 15:46
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
            Sua necessidade do medicamento Clonazepam foi atendida! Dirija-se
            até CLIPSI Hospital Geral de Campina Grande para coletar o
            medicamento.
          </p>
        </div>
      </div>
    </div>
  );
}
