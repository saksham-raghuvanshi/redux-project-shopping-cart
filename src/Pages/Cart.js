import React from "react";
import { useTitle } from "../Custom-hook/useTitle";
import CartCard from "../Components/CartCard";
import { useSelector } from "react-redux";

const Cart = () => {
  useTitle("Cart");

  const products = useSelector((state) => state.cartState.cartList);
  const total = useSelector((state) => state.cartState.total);
  return (
    <main>
      <section lassName="cart">
        <h1>
          Cart Item:{products.length}/ ₹{total}
        </h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Cart;
