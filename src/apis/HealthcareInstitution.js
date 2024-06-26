import { collection, doc, setDoc, getDoc, getDocs, query } from "firebase/firestore";
import { firestore } from "./FirebaseConfiguration";

export const createHealthcareInstitution = async (body, id) => {
  try {
    await setDoc(doc(firestore, "healthcareInstitutions", id), body);
    console.log("Document written with ID: ", id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getHealthcareInstitution = async (id) => {
  try {
    const institution = await getDoc(
      doc(firestore, "healthcareInstitutions", id)
    );
    console.log("Document getted: ", institution);
    return institution.exists() ? institution.data() : null;
  } catch (e) {
    console.error("Error to get document: ", e);
  }
};

export const getHealthcareInstitutions = async () => {
  try {
    var result = [];

    const q = query(collection(firestore, "healthcareInstitutions"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });

    return result;
  } catch (e) {
    console.error("Error to get documents: ", e);
  }
};
