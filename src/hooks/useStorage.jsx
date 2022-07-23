import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

//handle file uploads

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //references to a file inside the default firestorage bucket
    // console.log(projectStorage);
    // const collectionRef = projectFirestore.collection("images");

    if (file !== null) {
      const storageRef = ref(projectStorage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      const collectionRef = collection(projectFirestore, "image");

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(percentage);
        },
        (err) => {
          setError(err);
        },
        async () => {
          const currUrl = await getDownloadURL(uploadTask.snapshot.ref);
          await promiseSetter(currUrl);
          const createdAt = await serverTimestamp();
          await addDoc(collectionRef, { url: currUrl, createdAt });
        }
      );

      async function promiseSetter(url) {
        setUrl(url);
      }

      //   //(async) uploads the files to the ref
      //   storageRef.put(file).on(
      //     "state_changed",
      //     (snap) => {
      //       let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      //       setProgress(percentage);
      //     },
      //     (err) => setError(err),
      //     async () => {
      //       const url = await storageRef.getDownloadURL();
      //       setUrl(url);
      //     }
      //   );
    }
  }, [file]);
  return { progress, url, error };
};

export default useStorage;
