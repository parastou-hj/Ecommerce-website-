import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import remove_icon from "../assets/remove_icon.png";
import "../Cart/cartList.css";
import recycle_bin from "../assets/recycle_bin.png";
import { Link } from "react-router-dom";

const CartList = ({ addedItem }) => {
  const CartContext = useContext(Context);

  const item = addedItem;
  return (
    <>
      <div className="cart-item d-flex flex-column m-2 ">
        <div className="img-name d-flex ">
          <Link to={`/product/${item.id}`}>
            <img className="p-image" src={item.image} />
          </Link>
          <span className="p-2 mt-5">{item.name}</span>
        </div>
        <div className="num-price">
          <div className="num ">
            {item.quantity === 1 ? (
              <img
                onClick={decFromCart}
                src={recycle_bin}
                style={{ height: "40px" }}
                className="p-2"
              />
            ) : (
              <button onClick={decFromCart} className="">
                -
              </button>
            )}
            <span className="text-center p-1">{item.quantity}</span>
            <button onClick={addToCart} className="">
              +
            </button>
          </div>
          <span className="price ">${item.price}</span>
        </div>
      </div>
    </>
  );
  function addToCart() {
    CartContext.inCart(item);
  }
  function decFromCart() {
    CartContext.decCart(item);
  }
};

export default CartList;
