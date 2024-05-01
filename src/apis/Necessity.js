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

export const createNecessity = async (body, id) => {
  try {
    await setDoc(doc(firestore, "necessities", id), body);
    console.log("Document written with ID: ", id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getNecessity = async (id) => {
  try {
    const necessity = await getDoc(doc(firestore, "necessities", id));
    console.log("Document getted: ", necessity);
    return necessity.exists() ? necessity.data() : null;
  } catch (e) {
    console.error("Error to get document: ", e);
  }
};

export const getNecessities = async () => {
  try {
    var result = [];

    const q = query(collection(firestore, "necessities"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });

    return result;
  } catch (e) {
    console.error("Error to get documents: ", e);
  }
};

export const getMyNecessities = async (cpf) => {
  try {
    var result = [];

    const q = query(
      collection(firestore, "necessities"),
      where("cpf", "==", cpf)
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

export const updateNecessity = async (id, body) => {
  try {
    const updateRef = doc(firestore, "necessities", id);
    await updateDoc(updateRef, body);
    console.log("Document with ID updated: ", id);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export const deleteNecessity = async (id) => {
  try {
    const deleteRef = doc(firestore, "necessities", id);
    await deleteDoc(deleteRef);
    console.log("Document with ID deleted: ", id);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};
