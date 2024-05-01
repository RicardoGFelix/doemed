import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { app } from "./FirebaseConfiguration";
import { getCitizen } from "./Citizen";
import { getHealthcareInstitution } from "./HealthcareInstitution";

import cookies from "../utils/cookies";

const provider = new GoogleAuthProvider();
const auth = getAuth();

auth.languageCode = "pt-br";

export const signIn = async () => {
  return new Promise((resolve, reject) =>
    signInWithPopup(auth, provider).then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);

      const typeOfUser = cookies.getCookie("@doemed/type-of-user");
      const email = result?.user?.email;
      const accessToken = result?.user?.accessToken;

      switch (typeOfUser) {
        case "C":
          await loginAsACitizen(email, accessToken);
          resolve();
          break;
        case "I":
          await loginAsAInstitution(email, accessToken);
          resolve();
          break;
        default:
          reject();
      }
    })
  );
};

const loginAsACitizen = async (id, accessToken) => {
  if (id) {
    const citizen = await getCitizen(id);
    var nextRoute = "/cadastrar-cidadao";

    if (citizen?.cpf) {
      cookies.setCookie("@doemed/access-token", accessToken, null);
      cookies.setCookie("@doemed/current-user", JSON.stringify(citizen), null);
      nextRoute = "/home";
    }

    cookies.setCookie("@doemed/next-route", nextRoute, null);
  }
};

const loginAsAInstitution = async (id, accessToken) => {
  if (id) {
    const institution = await getHealthcareInstitution(id);
    var nextRoute = "/cadastrar-instituicao-de-saude";

    if (institution?.cnes) {
      cookies.setCookie("@doemed/access-token", accessToken, null);
      cookies.setCookie("@doemed/current-user", JSON.stringify(institution), null);
      nextRoute = "/home";
    }

    cookies.setCookie("@doemed/next-route", nextRoute, null);
  }
};

export const signOut = () => {
  cookies.deleteCookie("@doemed/access-token");
  cookies.deleteCookie("@doemed/current-user");
};
