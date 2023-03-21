import React from "react";
import style from "../components/style/start.module.css";
import Nav from "./Nav";
import { Link } from "react-router-dom";
const Start = () => {
  return (
    <div>
      <Nav />

      <div className={`${style.back}`}>
        <p className={`${style.text}`}>
          {" "}
          wel-come <br /> to our <br /> food court
        </p>
        <Link to={"/page2"}>
          <div className={`${style.btn}`}></div>
        </Link>
      </div>
    </div>
  );
};

export default Start;
