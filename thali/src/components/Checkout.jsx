import React from "react";
import Nav from "./Nav";
import Checkoutui from "./Checkoutui";
import style from "./style/checkoutui.module.css";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Checkout = () => {
  let show = useSelector((state, action) => state.item.item);

  let total = useSelector((state) => state.item.totalprice);

  let payalert = () => {
    return alert(" payment completed");
  };
  return (
    <div>
      <Nav />
      {show.map((ele) => {
        return (
          <Checkoutui
            price={ele.price}
            title={ele.title}
            key={ele.id}
            quantity={ele.quantity}
            images={ele.allimages}
          />
        );
      })}

      <div className={style.main}>
        <p> total price is {total} </p>
        <br />

        <Link to={"/"}>
          {" "}
          <button onClick={payalert} className={style.btn}>
            {" "}
            click 2 pay
          </button>
        </Link>
      </div>
      {/* total */}
    </div>
  );
};

export default Checkout;
