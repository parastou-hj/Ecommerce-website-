import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import "../ProductDisplay/productDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import BreadCrumb from "../Breadcrumb/Breadcrumb";
import recycle_bin from "../assets/recycle_bin.png";
import NavDown from "../navbar/NavDown";
import { addToCart, removeFromCart } from "../../features/cartSlice";

const ProductDisplay = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const addedToCart = cartItems.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <div>
      <BreadCrumb product={product} />
      <div className="container product-display">
        <div className="row ">
          <div className="col-lg-5 col-sm-12 display-image py-2">
            <div className="other-images ">
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
            </div>
            <div className="original-image">
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-sm-12 description py-2">
            <h1>{product.name}</h1>
            <div className="stars">
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_dull_icon} alt="" />
              <p>(122)</p>
            </div>
            <div className="product-prices">
              <div className="old-price">{product.old_price}</div>
              <div className="new-price">${product.price}</div>
            </div>
            <div className="product-description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                voluptas, laboriosam delectus dicta assumenda officia minus
                soluta nam nulla. Culpa quisquam earum magnam iusto nam dicta
                soluta inventore, assumenda quas?
              </p>
            </div>
            <div className="product-size">
              <h1>select size</h1>
              <div className="product-sizes-list">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
              </div>
            </div>
            {addedToCart&&addedToCart.quantity>0 ? (
              <div className="num ">
                {addedToCart.quantity === 1 ? (
                  <img
                    onClick={handleRemoveFromCart}
                    src={recycle_bin}
                    style={{ height: "40px" }}
                    className="p-2"
                    alt="Remove from cart"
                  />
                ) : (
                  <button onClick={handleRemoveFromCart} className="">
                    -
                  </button>
                )}
                <span className="text-center p-1">{addedToCart.quantity}</span>
                <button onClick={handleAddToCart}>+</button>
              </div>
            ) : (
              <button className="add-to-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
      <NavDown />
    </div>
  );
};

export default ProductDisplay;