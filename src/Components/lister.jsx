import React from 'react';

const Lister = ({data})=>{
  data.forEach(element => {
    console.log("Sending data")
    return(<h1>ddd</h1>)
  });
  return(
    <h1>{data}</h1>
  )
}
export default Lister