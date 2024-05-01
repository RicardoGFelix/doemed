import React from "react";
import { BrowserRouter, Routes, Outlet, Route, Navigate } from "react-router-dom";

import InitialPage from "./pages/InitialPage/InitialPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CitizenRegistrationPage from "./pages/CitizenRegistrationPage/CitizenRegistrationPage";
import HealthcareInstitutionRegistrationPage from "./pages/HealthcareInstitutionRegistrationPage/HealthcareInstitutionRegistrationPage";
import HomePage from "./pages/HomePage/HomePage";
import ManualsPage from "./pages/ManualsPage/ManualsPage";
import MedicineEditPage from "./pages/MedicineEditPage/MedicineEditPage";
import MedicineRegistrationPage from "./pages/MedicineRegistrationPage/MedicineRegistrationPage";
import MedicineStockPage from "./pages/MedicineStockPage/MedicineStockPage";
import MyNecessitiesPage from "./pages/MyNecessitiesPage/MyNecessitiesPage";
import MyProfilePage from "./pages/MyProfilePage/MyProfilePage";
import NecessitiesPage from "./pages/NecessitiesPage/NecessitiesPage";
import NecessityEditPage from "./pages/NecessityEditPage/NecessityEditPage";
import NecessityRegistrationPage from "./pages/NecessityRegistrationPage/NecessityRegistrationPage";
import ProfileEditPage from "./pages/ProfileEditPage/ProfileEditPage";
import SearchHealthcareInstitutionPage from "./pages/SearchHealthcareInstitutionPage/SearchHealthcareInstitutionPage";

import cookies from "./utils/cookies";

const PrivateWrapper = ({ }) => {
  let isAuthenticated = cookies.getCookie("@doemed/current-user");
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastrar-cidadao" element={<CitizenRegistrationPage />} />
        <Route path="/cadastrar-instituicao-de-saude" element={<HealthcareInstitutionRegistrationPage />} />
        <Route element={<PrivateWrapper />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
        <Route element={<PrivateWrapper />}>
          <Route path="/criar-necessidade" element={<NecessityRegistrationPage />} />
        </Route>
        <Route element={<PrivateWrapper />}>
          <Route path="/editar-necessidade" element={<NecessityEditPage />} />
        </Route>
        <Route element={<PrivateWrapper />}>
          <Route path="/minhas-necessidades" element={<MyNecessitiesPage />} />
        </Route>
        <Route element={<PrivateWrapper />}>
          <Route path="/buscar-instituicao-de-saude" element={<SearchHealthcareInstitutionPage />} />
        </Route>
        <Route element={<PrivateWrapper />}>
          <Route path="/meu-perfil" element={<MyProfilePage />} />
        </Route>
        <Route element={<PrivateWrapper />}>
          <Route path="/editar-perfil" element={<ProfileEditPage />} />
        </Route>
        <Route element={<PrivateWrapper />}>
          <Route path="/criar-medicamento" element={<MedicineRegistrationPage />} />
        </Route>
        <Route element={<PrivateWrapper />}>
          <Route path="/editar-medicamento" element={<MedicineEditPage />} />
        </Route>
        <Route element={<PrivateWrapper />}>
          <Route path="/medicamentos" element={<MedicineStockPage />} />
        </Route>
        <Route element={<PrivateWrapper />}>
          <Route path="/necessidades" element={<NecessitiesPage />} />
        </Route>
        <Route element={<PrivateWrapper />}>
          <Route path="/manuais" element={<ManualsPage />} />
        </Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
