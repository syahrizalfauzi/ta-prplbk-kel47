import React, { useContext, useMemo } from "react";
import { CartStateContext } from "../App";

const CartButton = () => {
  const { items } = useContext(CartStateContext);
  const totalPrice = useMemo(() => {
    let countedPrice = 0;
    for (const id in items) {
      countedPrice += items[id].price * items[id].amount;
    }
    return countedPrice.toFixed(2);
  }, [items]);

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
      <button>Checkout</button>
    </div>
  );
};

export default CartButton;
