import React from "react";
import style from "./style/home.module.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <div>
        <ul className={`${style.nav}`}>
          <Link style={{ color: "white" }} to={"/"}>
            {" "}
            <li>HOME</li>
          </Link>
          <Link style={{ color: "white" }} to={"/recipes"}>
            {" "}
            <li>RECIPIES</li>
          </Link>
          <Link style={{ color: "white" }} to={"/contactus"}>
            {" "}
            <li>CONTACT US</li>
          </Link>
          <Link style={{ color: "white" }} to={"/aboutus"}>
            <li>ABOUT US</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
