import React from "react";
import { itemsliceaction } from "../store/itemslice";
import { useDispatch } from "react-redux";
import style from "../../components/style/page2.module.css";
const Page2ui = (props) => {
  let { id, price, title } = props;
  let dispatch = useDispatch();
  let itemfun = () => {
    dispatch(itemsliceaction.additem({ id, price, title }));
  };
  let itemfunminus = () => {
    dispatch(itemsliceaction.removeitem(id));
  };

  return (
    <div>
      <div className={style.main}>
        <div>
          <img src={props.allimages} alt={props.title} />
        </div>

        <div>
          <button onClick={itemfun} className={style.btn}>
            Add{" "}
          </button>
          <button onClick={itemfunminus} className={style.btn}>
            Remove{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2ui;
