import {
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "./FirebaseConfiguration";

export const createMedicine = async (body, id) => {
  try {
    await setDoc(doc(firestore, "medicines", id), body);
    console.log("Document written with ID: ", id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getMedicine = async (id) => {
  try {
    const medicine = await getDoc(doc(firestore, "medicines", id));
    console.log("Document getted: ", medicine);
    return medicine.exists() ? medicine.data() : null;
  } catch (e) {
    console.error("Error to get document: ", e);
  }
};

export const getMedicines = async () => {
  try {
    var result = [];

    const q = query(collection(firestore, "medicines"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });

    return result;
  } catch (e) {
    console.error("Error to get documents: ", e);
  }
};

export const getMyMedicines = async (cnes) => {
  try {
    var result = [];

    const q = query(
      collection(firestore, "medicines"),
      where("cnes", "==", cnes)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });

    return result;
  } catch (e) {
    console.error("Error to get documents: ", e);
  }
};

export const updateMedicine = async (id, body) => {
  try {
    const updateRef = doc(firestore, "medicines", id);
    await updateDoc(updateRef, body);
    console.log("Document with ID updated: ", id);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export const deleteMedicine = async (id) => {
  try {
    const deleteRef = doc(firestore, "medicines", id);
    await deleteDoc(deleteRef);
    console.log("Document with ID deleted: ", id);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};
