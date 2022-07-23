import React, { useContext } from "react";
import { AppContext } from "../App";
import "./uploadForm.css";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const { handleChange, error, file } = useContext(AppContext);
  return (
    <form>
      <label htmlFor="" for="add__photo">
        <input type="file" id="add__photo" onChange={handleChange} />+
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{file.name}</div>}
        {file && <ProgressBar />}
      </div>
    </form>
  );
};

export default UploadForm;
