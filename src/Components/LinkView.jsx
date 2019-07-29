import React, { useState ,useEffect} from "react";
import { Formik } from "formik";
import axios from "axios";
import Lister from "./lister";
import { GooSpinner } from "react-spinners-kit";
import chainlink from '../assets/link-c.svg'
import copy from '../assets/copy.svg'
import link from '../assets/link.svg'


const LinkView = () => {
  const [data, setData] = useState("");
  const [merr, setMerr] = useState("");


  const handelData = async () => {
    const reqd = await axios.get(process.env.REACT_APP_API_ID+"url");
    var data = { data: [] };
    reqd.data.map(ele => data.data.push(ele.url));
     data.data.reverse()
    setData(data);
  };


  useEffect( () => {
   
handelData();

  }, [data]);



  const CopyLink = lols =>{

    console.log(lols)
    navigator.clipboard.writeText(lols)
    // document.execCommand('copy')
  }

  const OpenLink = async lols => {
    console.log(lols);
    window.open(lols);
  };
  return (
    <div>
      <h1>Hello</h1>
  

      <Formik
        initialValues={{ url: "" }}
        onSubmit={async values => {
          await axios
            .post((process.env.REACT_APP_API_ID+"url"), {
              url: values.url
            })
            .then(function(value){
              console.log(data)
              data.data.splice(0, 0, values.url)
              console.log(data)
              setData(data)
            }

            )
            .catch(err => {
              setMerr("Some Error Occurred");
              console.log(err)
            });
        }}
        render={({ values, handleChange, handleSubmit }) => (
          <div>
            <form onSubmit={handleSubmit}>
              <input
                className="inputbox"
                id="url"
                type="text"
                value={values.url}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
              <button className="submitbutton" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
      />
      {merr && <div style={{ color: "red" }}> {merr} </div>}
      {/* <button onClick={handelData}>LOL</button> */}
      
      
      <div   style={{marginLeft:"50%",marginTop:60,marginBottom:30}}><GooSpinner
      size={30}
      color="#128DFF"
      loading={!data} /></div>
      {data && (
        <Lister
          data={data}
          variable="data"
          ic1Click={CopyLink}
          ic2Click={OpenLink}
          ic1={chainlink}
          ic2={copy}
          ic3={link}
        />
      )}
    </div>
  );
};

export default LinkView;
