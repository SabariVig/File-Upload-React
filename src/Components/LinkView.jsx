import React from "react";
import { Formik } from "formik";

const LinkView = () => {

  return (
    <div>
      <h1>Hello</h1>
      <Formik
        initialValues={{url:""}}
        onSubmit=""
        render={({ values, handleChange, handleSubmit }) => (
          <div >
            <input className="inputbox" id="url" type="text"  value={values.url} onChange={handleChange}  onSubmit={handleSubmit}/>
            <button className="submitbutton" type="submit" onSubmit={(values)=>console.log(values.url)}>Submit</button>
          </div>
        )}
      />
      <h1>kasbxkjn</h1>
    </div>
  );
};

export default LinkView;
