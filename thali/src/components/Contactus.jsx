import React from "react";
import { SocialIcon } from "react-social-icons";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import style from "./style/contactus.module.css";
const Contactus = () => {
  let formsubmithandler = (event) => {
    event.preventDefault();
    alert("thanks for contacting us!");
  };
  return (
    <div>
      <Nav />
      <img
        src="https://aasthadentalcare.com/wp-content/uploads/2015/12/contact-us.jpg"
        alt=""
        className={`${style.conp}`}
      />

      <div className={`${style.cu}`}> Contact Us</div>
      <div className={`${style.fdiv}`}>
        <div className={`${style.social}`}>
          FOLLOW US ON <br />
          <Link
            to={
              "//twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
            }
            target="_blank"
          >
            {" "}
            <SocialIcon network="twitter" className={`${style.icon}`} />
          </Link>
          <Link to={"//www.facebook.com/"} target="_blank">
            <SocialIcon network="facebook" className={`${style.icon}`} />
          </Link>
          <Link to={"//www.instagram.com/"} target="_blank">
            <SocialIcon network="instagram" className={`${style.icon}`} />
          </Link>
          <Link to={"//www.youtube.com"} target="_blank">
            <SocialIcon network="youtube" className={`${style.icon}`} />
          </Link>
        </div>

        <form action="" onSubmit={formsubmithandler}>
          <label htmlFor=""> FullName</label>
          <br />
          <input type="text" required /> <br />
          <label htmlFor=""> E-mail</label>
          <br />
          <input type="email" required />
          <br />
          <label htmlFor=""> message</label>
          <br />
          <textarea name="" id="" cols="30" rows="10" required></textarea>
          <br />
          <button className={`${style.btn}`}> ContactUs</button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
