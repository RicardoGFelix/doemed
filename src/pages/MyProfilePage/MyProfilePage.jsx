import React from "react";
import "./styles.css";

import Header from "../../components/Header/Header";
import ProfileContainer from "../../components/ProfileContainer/ProfileContainer";

function MyProfilePage() {
  return (
    <div className="my-profile-page">
      <Header />

      <div className="page-title">Seu perfil</div>

      <div className="my-profile-page-content">
        <ProfileContainer />
      </div>
    </div>
  );
}

export default MyProfilePage;
