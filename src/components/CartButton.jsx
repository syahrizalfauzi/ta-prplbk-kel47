import React, { useContext, useMemo } from "react";
import { CartDispatchContext, CartStateContext } from "../App";
import { showModal } from "../state/cart";
import CartModal from "./CartModal";
import PaymentModal from "./PaymentModal";
import "./CartButton.css";

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

    >
      <div

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
