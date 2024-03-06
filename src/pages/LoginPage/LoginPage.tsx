import React from "react";
import DoemedLogoSecundaryColor from "../../assets/DoemedLogoSecundaryColor.svg"
import "./styles.css";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="presentation-container">
        <figure className="logo-container">
          <img className="logo-image" src={DoemedLogoSecundaryColor} alt="Logo" />
        </figure>
        <p className="presentation-text">Promovendo a solidariedade em prol da saúde de todos!</p>
      </div>
      <div className="action-container">
        <div className="form-login-container">
            <div className="input-container">
                <input className="input user" type="text" placeholder="CPF" />
            </div>
            <div className="input-container">
                <input className="input password" type="password" placeholder="Senha" />
            </div>
            <button className="button link">Esqueci minha senha</button>
        </div>
        <div className="buttons">
          <button className="button">Entrar</button>
          <button className="button link">Não possui uma conta? Cadastre-se!</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
