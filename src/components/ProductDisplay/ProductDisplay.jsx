import React, { useContext } from "react";
import "../ProductDisplay/productDisplay.css";
import P1_product_i1 from "../assets/p1_product_i1.png";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { Breadcrumb } from "react-bootstrap";
import BreadCrumb from "../Breadcrumb/Breadcrumb";
import { Context } from "../../Context/Context";
import recycle_bin from "../assets/recycle_bin.png";
import NavDown from "../navbar/NavDown";

const ProductDisplay = ({ product }) => {
  const productShown = product;
  const ProductContext = useContext(Context);
  const cartItems = ProductContext.cartItems;
  const addedToCart = cartItems.find((item) => item.id === productShown.id);
  const cartNumber = ProductContext.cartItemsNumber;

  return (
    <div>
      <BreadCrumb product={productShown} />
      <div className="container product-display">
        <div className="row ">
          <div className="col-lg-5 col-sm-12 display-image py-2">
            <div className="other-images ">
              <img src={productShown.image} alt="" />
              <img src={productShown.image} alt="" />
              <img src={productShown.image} alt="" />
              <img src={productShown.image} alt="" />
            </div>
            <div className="original-image">
              <img src={productShown.image} alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-sm-12 description py-2">
            <h1>{productShown.name}</h1>
            <div className="stars">
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_dull_icon} alt="" />
              <p>(122)</p>
            </div>
            <div className="product-prices">
              <div className="old-price">{productShown.old_price}</div>
              <div className="new-price">${productShown.price}</div>
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
            {addedToCart && addedToCart.quantity > 0 ? (
              <div className="num ">
                {addedToCart.quantity === 1 ? (
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
                <span className="text-center p-1">{addedToCart.quantity}</span>
                <button onClick={addToCart}>+</button>
              </div>
            ) : (
              <button className="add-to-cart" onClick={addToCart}>
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
      <NavDown />
    </div>
  );
  function addToCart() {
    ProductContext.inCart(productShown);
  }
  function decFromCart() {
    ProductContext.decCart(productShown);
  }
};

export default ProductDisplay;
