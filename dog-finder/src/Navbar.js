import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


function Navbar({dogs}) {
    const links = dogs.map(dog => (
      <NavLink className="Navbar-link" key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} >
        {dog.name}
      </NavLink>
    ));
    return (
      <nav className="Navbar">
        <NavLink className="Navbar-link Navbar-link-home" exact to="/dogs"><i class="fas fa-home"></i></NavLink>
        {links}
      </nav>
    );
  }
  
  export default Navbar;