import React, { useContext, useMemo } from "react";
import { CartDispatchContext, CartStateContext } from "../App";
import { showModal } from "../state/cart";
import CartModal from "./CartModal";
import PaymentModal from "./PaymentModal";

const CartButton = () => {
  const { items } = useContext(CartStateContext);
  const cartDispatch = useContext(CartDispatchContext);
  const totalPrice = useMemo(() => {
    let countedPrice = 0;
    for (const id in items) {
      countedPrice += items[id].price * items[id].amount;
    }
    return countedPrice.toFixed(2);
  }, [items]);

  const handleShowCart = () => cartDispatch(showModal(true));

  return (
    <div
      style={{
        position: "fixed",
        right: 32,
        bottom: 32,
        backgroundColor: "white",
        padding: "16px",
        display: "flex",
        flexDirection: "row",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "32px",
        }}
      >
        <b>Total :</b>
        <p>${totalPrice}</p>
      </div>
      <button onClick={handleShowCart}>Checkout</button>

      <CartModal />
      <PaymentModal />
    </div>
  );
};

export default CartButton;
