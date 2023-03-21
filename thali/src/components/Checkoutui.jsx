import React from "react";
import style from "./style/checkoutui.module.css";
const Checkoutui = (props) => {
  
  return (
    <div className={style.main}>
      <div>
        {` selected dish are ${props.title} with there price  ${props.price} RS X  [  quantity ${props.quantity}] `}
      </div>
    </div>
  );
};

export default Checkoutui;
