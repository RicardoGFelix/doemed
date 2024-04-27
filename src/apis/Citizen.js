import { doc, setDoc, getDoc } from "firebase/firestore";
import { firestore } from "./FirebaseConfiguration";

export const createCitizen = async (body, id) => {
  try {
    await setDoc(doc(firestore, "citizens", id), body);
    console.log("Document written with ID: ", id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getCitizen = async (id) => {
  try {
    const citizen = await getDoc(doc(firestore, "citizens", id));
    console.log("Document getted: ", citizen);
    return citizen.exists() ? citizen.data() : null;
  } catch (e) {
    console.error("Error to get document: ", e);
  }
};
