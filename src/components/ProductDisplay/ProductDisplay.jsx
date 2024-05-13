import React from "react";
import '../ProductDisplay/productDisplay.css'
import P1_product_i1 from "../assets/p1_product_i1.png";
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { Breadcrumb } from "react-bootstrap";
import BreadCrumb from "../Breadcrumb/Breadcrumb";

const ProductDisplay = (props) => {
  const productShown = props.product;
  console.log(productShown);

  return (
    <div>
      <BreadCrumb product={productShown}/>
      <div className="product-display">
        <div className="display-image">
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
        <div className="description">
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
                <div className="old-price">${productShown.old_price}</div>
                <div className="new-price">${productShown.price}</div>
            </div>
            <div className="product-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptas, laboriosam delectus dicta assumenda officia minus soluta nam nulla. Culpa quisquam earum magnam iusto nam dicta soluta inventore, assumenda quas?</p>
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
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
