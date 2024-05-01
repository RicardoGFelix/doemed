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

export const createNotification = async (body, id) => {
  try {
    await setDoc(doc(firestore, "notifications", id), body);
    console.log("Document written with ID: ", id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getNotification = async (id) => {
  try {
    const notification = await getDoc(doc(firestore, "notifications", id));
    console.log("Document getted: ", notification);
    return notification.exists() ? notification.data() : null;
  } catch (e) {
    console.error("Error to get document: ", e);
  }
};

export const getNotifications = async () => {
  try {
    var result = [];

    const q = query(collection(firestore, "notifications"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });

    return result;
  } catch (e) {
    console.error("Error to get documents: ", e);
  }
};

export const getMyNotifications = async (cpf) => {
  try {
    var result = [];

    const q = query(
      collection(firestore, "notifications"),
      where("patientCPF", "==", cpf)
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

export const updateNotification = async (id, body) => {
  try {
    const updateRef = doc(firestore, "notifications", id);
    await updateDoc(updateRef, body);
    console.log("Document with ID updated: ", id);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export const deleteNotification = async (id) => {
  try {
    const deleteRef = doc(firestore, "notifications", id);
    await deleteDoc(deleteRef);
    console.log("Document with ID deleted: ", id);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};
