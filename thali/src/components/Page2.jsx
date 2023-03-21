import React, { useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Page2ui from "./style/Page2ui";
import { useSelector } from "react-redux";

let Dummydata = [
  {
    id: "i1",
    price: 10,
    title: "roti",
    img: "https://static.toiimg.com/thumb/61203720.cms?width=1200&height=900",
  },
  {
    id: "i2",
    price: 50,
    title: "gulab-jamun",
    img: "https://rakskitchen.net/wp-content/uploads/2021/09/gulab-jamun.jpg",
  },
  {
    id: "i3",
    price: 100,
    title: "paneer",
    img: "https://static.toiimg.com/thumb/52446409.cms?width=1200&height=900",
  },
  {
    id: "i4",
    price: 80,
    title: "daal",
    img: "https://whisk-res.cloudinary.com/image/upload/g_auto,g_auto,c_fill,q_60,f_auto,h_600,w_800/v1601755298/recipe/69d88336c00fa3b4182a933ddea3a6a6.jpg",
  },

  {
    id: "i5",
    price: 40,
    title: "curd",
    img: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eW9ndXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: "i6",
    price: 50,
    title: "pickle",
    img: "https://media.istockphoto.com/id/528476560/photo/mango-pickle.jpg?s=612x612&w=0&k=20&c=1Hi9BzNeMEfKkBOMniMyxWF4mVs8LXrE-qHEu3F_R5M=",
  },
];

const Page2 = (props) => {
  let count = useSelector((state) => state.item.totalitems);

  return (
    <div>
      <Nav />

      {Dummydata.map((item) => {
        return (
          <Page2ui
            id={item.id}
            price={item.price}
            title={item.title}
            allimages={item.img}
            key={item.id}
          />
        );
      })}

      <h1
        style={{
          marginLeft: "35.5rem",
          backgroundColor: "black",
          color: "#fcefef",
          width: "15rem",
          textAlign: "center",
          marginBottom: "10px",
          borderRadius: "10px",
        }}
      >
        {count >= 2 ? <Link to={"/checkout"}>checkout </Link> : ""}
      </h1>
    </div>
  );
};

export default Page2;
