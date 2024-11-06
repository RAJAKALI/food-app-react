import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const ListItemCards = ({ name, description, imageId, defaultPrice, price,id,cart}) => 
  {
  const [added,setAdded]=useState("add(+)")
  const dispatch=useDispatch();
  return (
    <div className=" border-gray-300 border-b-[1px] flex justify-between p-3">
      <div className="w-9/12">
        <h4 className=" font-semibold">
          {name} - ₹{price ? price / 100 : defaultPrice / 100}
        </h4>
        <span>{description}</span>
      </div>
      <div className="w-3/12">
        {cart?<button
          className="absolute bg-black text-white mx-6 my-14 rounded-md px-1"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Remove(-)
        </button>:
        added==="Cart"?<Link to="/cart"><button className="absolute bg-black text-white mx-10 my-16 rounded-md px-1">{added}</button></Link>:<button
        className="absolute bg-black text-white mx-10 my-16 rounded-md px-1"
        onClick={() => {
          setAdded("Cart");
          dispatch(addItem({name, description, imageId, defaultPrice, price,id}));
        }}
      >
        {added}
      </button>
  }
        <img className="w-32 h-20 rounded-md" src={IMG_CDN_URL + imageId}></img>
      </div>
    </div>
  );
};

export default ListItemCards;
