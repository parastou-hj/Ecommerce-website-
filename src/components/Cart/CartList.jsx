import React from "react";
import { useDispatch } from "react-redux";
import remove_icon from "../assets/remove_icon.png";
import "../Cart/cartList.css";
import recycle_bin from "../assets/recycle_bin.png";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../features/cartSlice";

const CartList = ({ addedItem }) => {
const dispatch=useDispatch();

const handeleRemove=()=>{
  dispatch(removeFromCart(addedItem))
}
const handeleAdd=()=>{
  dispatch(addToCart(addedItem))
}

  const item = addedItem;



  return (
    <>
      <div className="cart-item d-flex flex-column m-2 ">
        <div className="img-name d-flex ">
          <Link to={`/product/${item.id}`}>
            <img className="p-image" src={item.image} />
          </Link>
          <span className="p-2 mt-5">{item.name||item.title}</span>
        </div>
        <div className="num-price">
          <div className="num ">
            {item.quantity === 1 ? (
              <img
                onClick={handeleRemove}
                src={recycle_bin}
                style={{ height: "40px" }}
                className="p-2"
              />
            ) : (
              <button onClick={handeleRemove} className="">
                -
              </button>
            )}
            <span className="text-center p-1">{item.quantity}</span>
            <button onClick={handeleAdd} className="">
              +
            </button>
          </div>
          <span className="price ">${item.price}</span>
        </div>
      </div>
    </>
  );

};

export default CartList;