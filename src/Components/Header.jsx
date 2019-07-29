import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="navbar-f"
      style={{
        textAlign: "left",
        
      }}
    >
      <nav>
        <Link to="/">
          <button className="navbar-l">Hawk </button>
        </Link>
        <button className="navbar-l">
          Login <i className="fas fa-sign-in-alt" />
        </button>
        <button className="navbar-l">
          Files <i className="far fa-file" />{" "}
        </button>
      </nav>
    </div>
  );
};

export default Header;
