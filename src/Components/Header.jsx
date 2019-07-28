import React from 'react'
import { Link } from 'react-router-dom';


const Header =()=>{
  return(
    <div className="navbar-f" style={{textAlign:"left","box-shadow": "26px 24px 14px -23px rgba(184,184,184,0.8)"}}>
      <nav>
        <Link to="/sxsx"><button  className="navbar-l">Logo  <img src="http://logok.org/wp-content/uploads/2015/09/Google-logo-2015-G-icon.png" alt="" height="30" srcset=""/>  </button></Link>
        <button className="navbar-l">Login  <i class="fas fa-sign-in-alt"></i></button>
        <button className="navbar-l">Files <i class="far fa-file"></i> </button>
      </nav>
    </div>
  )
}

export default Header;