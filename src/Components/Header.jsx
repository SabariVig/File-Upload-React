import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {

  

  render() {
// const {data}= this.props
// console.log(data)
// const display=data.map(ele=> <li ><Link to={ele.url} style={{"fontSize":"3em"}}>{ele.name}</Link></li>       )
 return (
      <div>
        <div className="header header-fixed">
          <div className="navbar container">
            <div className="logo">
            </div>

            <nav className="menu">
              <ul>
                {/* {display} */}
              <li ><Link to="/" style={{"fontSize":"3em"}}>Hawk</Link></li>              
              {/* <li ><Link to="/" style={{"fontSize":"3em"}}>Hawk</Link></li>               */}

              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;