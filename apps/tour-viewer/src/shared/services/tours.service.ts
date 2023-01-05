import { app } from "@app/core/initialize-services/InitializeServices";
import { Tour } from "@app/shared/models/tour.type";
import {
  connectFirestoreEmulator,
  enableIndexedDbPersistence,
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";

export const getInitializedFirestore = (app: any) => {
  const firestore = getFirestore(app);
  if (process.env.NODE_ENV === "development") {
    return firestore;
  }
  // only enable emulator if in dev mode, and we haven't already enabled it
  if (
    process.env.NODE_ENV === "development" &&
    (firestore as any)._getSettings().host === "firestore.googleapis.com"
  ) {
    connectFirestoreEmulator(getFirestore(app), "127.0.0.1", 5173);
    console.log("Firestore emulator attached!");
  }

  // only enable indexeddb if the firestore client hasn't been fully initialized
  if (!(firestore as any)._firestoreClient) {
    enableIndexedDbPersistence(firestore)
      .then(() => console.log("Persistence enabled!"))
      .catch((err) => console.error(err.message));
  }
  return firestore;
};

export const service_tourService = {
  getTourById: async (toudId: string) => {
    const db = getInitializedFirestore(app);
    const tourRef = doc(db, "tours", toudId);
    return (await getDoc(tourRef)).data() as Tour;
  },
};
