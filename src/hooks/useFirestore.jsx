import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  getDocs,
  querySnapshot,
  limit,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (col) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    // async function fetchData() {
    //   const querySnapshot = await getDocs(
    //     collection(projectFirestore, col),
    //     orderBy("createAt", "desc")
    //   );
    //   console.log({ querySnapshot });
    //   let documents = [];
    //   querySnapshot.forEach((doc) => {
    //     documents.push({ ...doc.data(), id: doc.id });
    //   });
    //   setDocs(documents);
    // }

    // const unsub = fetchData();
    // // return () => unsub;

    // const q = query(
    //   collection(projectFirestore, col),
    //   orderBy("createAt", "desc")
    // );
    // console.log({ q });
    // const unSub = onSnapshot(q, (querySnapshot) => {
    //   const documents = [];
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc);
    //     documents.push({ ...doc.data(), id: doc.id });
    //   });
    //   setDocs(documents);
    // });

    const db = collection(projectFirestore, col);
    const q = query(db, orderBy("createdAt", "desc"));
    console.log(q);
    const unsub = onSnapshot(q, (snapshot) => {
      let documents = [];
      snapshot.docs.map((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });

      setDocs(documents);
    });

    return () => unsub;
  }, [col]);
  return { docs };
};

export default useFirestore;
