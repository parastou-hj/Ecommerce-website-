import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cartSlice"; // Adjust the import path as needed
import remove_icon from "../assets/remove_icon.png";
import "../Cart/cartList.css";
import recycle_bin from "../assets/recycle_bin.png";
import { Link } from "react-router-dom";

const CartList = ({ addedItem }) => {
  const dispatch = useDispatch();

  const item = addedItem;

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item d-flex flex-column m-2 ">
      <div className="img-name d-flex ">
        <Link to={`/product/${item.id}`}>
          <img className="p-image" src={item.image} alt={item.name} />
        </Link>
        <span className="p-2 mt-5">{item.name}</span>
      </div>
      <div className="num-price">
        <div className="num ">
          {item.quantity === 1 ? (
            <img
              onClick={handleRemoveFromCart}
              src={recycle_bin}
              style={{ height: "40px" }}
              className="p-2"
              alt="Remove item"
            />
          ) : (
            <button onClick={handleRemoveFromCart} className="">
              -
            </button>
          )}
          <span className="text-center p-1">{item.quantity}</span>
          <button onClick={handleAddToCart} className="">
            +
          </button>
        </div>
        <span className="price ">${item.price}</span>
      </div>
    </div>
  );
};

export default CartList;