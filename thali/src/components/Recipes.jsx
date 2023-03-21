import React from "react";
import style from "./style/recipe.module.css";
import Nav from "./Nav";
import { Link } from "react-router-dom";
const Recipes = () => {
  return (
    <div>
      <Nav />

      <div>
        <div className={`${style.back}`}>
          <Link
            to={"//recipes.timesofindia.com/recipes/chapati/rs61203720.cms"}
            target="_blank"
          >
            <img
              src="https://static.toiimg.com/thumb/61203720.cms?width=1200&height=900"
              alt="chapati"
              className={`${style.imgs}`}
            />
          </Link>
          <Link to={"//ranveerbrar.com/recipes/gulab-jamun/"} target="_blank">
            <img
              src="https://rakskitchen.net/wp-content/uploads/2021/09/gulab-jamun.jpg"
              alt="gulab-jamun"
              className={`${style.imgs}`}
            />
          </Link>
          <Link to={"//ranveerbrar.com/recipes/shahi-paneer/"} target="_blank">
            <img
              src="https://static.toiimg.com/thumb/52446409.cms?width=1200&height=900"
              alt="shahi-paneer"
              className={`${style.imgs}`}
            />
          </Link>
          <Link
            to={"//ranveerbrar.com/recipes/dhaba-style-dal-fry/"}
            target="_blank"
          >
            <img
              src="https://whisk-res.cloudinary.com/image/upload/g_auto,g_auto,c_fill,q_60,f_auto,h_600,w_800/v1601755298/recipe/69d88336c00fa3b4182a933ddea3a6a6.jpg"
              alt="daal"
              className={`${style.imgs}`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
