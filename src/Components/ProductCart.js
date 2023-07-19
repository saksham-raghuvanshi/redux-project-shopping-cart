import React, { useEffect, useState } from "react";
import { add, remove } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const cardList = useSelector((state) => state.cartState.cartList);
  const [isinCart, setIsinCart] = useState(false);

  const { id, name, price, image } = product;

  useEffect(() => {
    const productInCart = cardList.find((item) => item.id === id);
    if (productInCart) {
      setIsinCart(true);
    } else {
      setIsinCart(false);
    }
  }, [cardList, id]);
  return (
    <div className="productcart">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>₹{price}</p>
        {isinCart ? (
          <button className="remove" onClick={() => dispatch(remove(product))}>
            Remove
          </button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
