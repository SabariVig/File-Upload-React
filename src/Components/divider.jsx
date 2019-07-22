import React from 'react';
import {Link} from 'react-router-dom'


const Divider = () =>{
  return(
    <div >
      <Link to="/file">
        <button className="fiftybutton">Files</button>
      </Link>
      <Link to="/link">
        <button className="fiftybutton">Link</button>
      </Link>
    </div>
  )
}

export default Divider;