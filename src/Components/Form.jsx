import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("Choose A File / Drop The File");
  const [error,setError] =useState("")
  const handelChange = e => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    console.log(e.target.files[0]);
    setError("")

  };

  const handelSubmit = async e => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", file);
    await axios
      .post(process.env.REACT_APP_API_ID, formdata, {
        header: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(
        console.log("Uploaded")
        
        )
        .catch(err => {
          console.log(err);
          setError("An Error Occured")
      });
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div className="fileDiv">
          {fileName}

          <span style={{fontSize:"1.5em",margin:10}} className="jam jam-upload"></span>
          <input
            type="file"
            className="hide_file"
            id="customfile"
            onChange={handelChange}
          />
        </div>
        <input className="submitButton" type="submit" value="Upload" style={{"fontSize":"1.6em"}} />
      </form>
      <div style={{"color":"red"}}>{error}</div>
    </div>
  );
};

export default FileUpload;
