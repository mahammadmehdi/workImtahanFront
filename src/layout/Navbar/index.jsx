import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss"

function Navbar() {
  return (
    <div className="navigation">
      <div className="navbar">
        <div className="navbarMain">
          <img className="image"
            src="https://preview.colorlib.com/theme/educature/img/logo.png.webp"
            alt=""
          />
          <ul className="pages">
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/addpages"}>Add Pages</NavLink></li>
            <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
            <li><NavLink>About</NavLink></li>
            <li><NavLink>Blog</NavLink></li>
            <li><NavLink>Contact</NavLink></li>
          </ul>
            <li className="bars"><i class="fa-solid fa-bars"></i></li>
        </div>
      </div>
      <div className="navbarAbout">
        <h2 className="main">We Rank the Best Courses
on the Web</h2>
        <p className="about">In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope.</p>
        <div className="input">
            <input type="text" placeholder="Search Courses" />
            <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
