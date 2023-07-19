import React from "react";
import { add, remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";
const ProductCart = ({ product }) => {
  const dispatch = useDispatch();

  const { name, price, image } = product;
  return (
    <div className="productcart">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>₹{price}</p>
        <button onClick={() => dispatch(add(product))}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCart;
