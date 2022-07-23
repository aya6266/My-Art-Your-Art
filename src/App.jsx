import React from "react";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import useStorage from "./hooks/useStorage";

import { createContext, useState } from "react";
import { useEffect } from "react";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";

//appcontexts for useContext
export const AppContext = createContext();

function App() {
  //state orgisiation
  //file state
  const [file, setFile] = useState(null);
  //error state
  const [error, setError] = useState(null);

  const [selectedImg, setSelectedImg] = useState(null);
  // url is produced when the file is fully uploaded to
  // firestorage and progress tracks the percentage upload
  const { url, progress } = useStorage(file);

  //when a url has been created the file state is update to null
  //which removes the render of the progress compnonet
  useEffect(() => {
    if (url) setFile(null);
  }, [url, setFile]);

  //users can only upload a png or jpeg
  const types = ["image/png", "image/jpeg"];
  //sets the file state of the current file selected
  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Image File Can Only Be PNG/JPEG");
    }
  };

  const handleClickImage = (url) => {
    setSelectedImg(url);
  };

  const handleBackDrop = (e) => {
    e.stopPropagation();

    setSelectedImg(null);
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          handleChange,
          error,
          file,
          url,
          progress,
          selectedImg,
          setSelectedImg,
          handleClickImage,
          handleBackDrop,
        }}
      >
        <Title />
        <UploadForm />
        <ImageGrid />
        {selectedImg && <Modal />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
