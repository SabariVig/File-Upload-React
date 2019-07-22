import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("Choose A File / Drop The File");

  const handelChange = e => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    console.log(e.target.files[0]);
  };

  const handelSubmit = async e => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", file);
    await axios
      .post("https://83g8t.sse.codesandbox.io/", formdata, {
        header: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(console.log("Uploaded"))
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div className="fileDiv">
          {/* Choose File */}
          {fileName}
          <i className="fas fa-upload"style={{"margin":20}} ></i>
          <input
            type="file"
            className="hide_file"
            id="customfile"
            onChange={handelChange}
          />
        </div>
        <input className="submitButton" type="submit" value="Upload" style={{"fontSize":"1.6em"}} />
      </form>
    </div>
  );
};

export default FileUpload;
