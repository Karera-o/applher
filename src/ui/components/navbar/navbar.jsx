import React from "react";
import "./navbar.css";
// import logo from "./logo.png"
import Logo from "../logo/logo";
// import { Link } from "react-router-dom"
// import logo from "../../../data/images/logo.png"

function Navbar() {
  return (
    <div id="navContainer">
    
      <div id="navbar">
        <div id="navLogo">
          {/* <img src={logo} alt="" /> */}
          <Logo />
        </div>
        <div id="navUrl">
          <ul id="list">
            <li>
              <a href="/">Company</a>
            </li>
            <li>
              <a href="/">Investors</a>
            </li>
            <li>
              <a href="/">Career</a>
            </li>
            <li>
              <a href="/">Register</a>
            </li>
            <li>
              <a href="/">Donate</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
            {/* <li className="li" ><a href="/">Company</a></li>
                <li className="li"><a href="/">Investors</a></li>
                <li className="li"><a href="/">Career</a></li>
                <li className="li"><a href="/">Register</a></li>
                <li className="li"><a href="/"></a></li>
                <li className="li"><a href="/">Login</a></li> */}
            {/* <h1>hello world navbar</h1> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
