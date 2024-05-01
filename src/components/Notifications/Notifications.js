import React, { useEffect, useState } from "react";
import "./styles.css";

import DoemedLogoPrincipalColor from "../../assets/DoemedLogoPrincipalColor.svg";

import Notification from "../Notification/Notification";

import cookies from "../../utils/cookies";

import { getMyNotifications } from "../../apis/Notification";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  var currentUser = JSON.parse(cookies.getCookie("@doemed/current-user"));

  useEffect(() => {
    if (currentUser?.cpf) {
      getMyNotifications(currentUser.cpf).then((result) => {
        setNotifications(result);
      });
    }
  }, []);

  function closeNotifications() {
    let notifications = document.getElementById("notifications_container");

    if (notifications) {
      notifications.classList.remove("opened");
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
        {notifications.map((notification) => {
          return (
            <Notification
              key={`${notification.patientCPF}-${notification.drugName}-${notification.timestamp}`}
              notification={notification}
            />
          );
        })}
      </div>
    </div>
  );
}
