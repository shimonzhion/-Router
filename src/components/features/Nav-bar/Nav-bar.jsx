import "./Nav-bar.css";
import React from "react";
import{Link} from "react-router-dom"


function NavBar() {
  return (
   <div>
    <nav id="nav_bar">
    <Link to="/"><button className="btn_nav">Home</button></Link>
   <Link to="About"><button className="btn_nav">About</button></Link>
   <Link to="Users"><button className="btn_nav">Users</button></Link>
   <Link to="ContactUS"><button className="btn_nav">ContactUs</button></Link>
    </nav>
   </div>
  );
};

export default NavBar;
