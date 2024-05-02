import React from "react";
import { useNavigate } from "react-router-dom";

import DoemedLogoSecundaryColor from "../../assets/DoemedLogoSecundaryColor.svg";
import GoogleIcon from "../../assets/GoogleIcon.svg";
import "./styles.css";

import { signIn } from "../../apis/Authentication";
import cookies from "../../utils/cookies";

function LoginPage() {
  const navigate = useNavigate();

  async function login() {
    await signIn();

    const nextRoute = cookies.getCookie("@doemed/next-route");

    if (nextRoute) {
      navigate(nextRoute);
    }
  }
  return (
    <div className="login-page">
      <div className="presentation-container">
        <figure className="logo-container">
          <img
            className="logo-image"
            src={DoemedLogoSecundaryColor}
            alt="Logo"
          />
        </figure>
        <p className="presentation-text">
          Promovendo a solidariedade em prol da saúde de todos!
        </p>
      </div>
      <div className="action-container">
        <div className="buttons">
          <button
            className="button"
            onClick={() => {
              login();
            }}
          >
            <span>Entrar com Google</span>
            <img src={GoogleIcon} alt="Ícone do Google" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
