import { useContext } from "react";
import { CartDispatchContext, CartStateContext } from "../App";
import { addItem, removeItem } from "../state/cart";

export const ProductCard = ({ product }) => {
  const cartState = useContext(CartStateContext);
  const cartDispatch = useContext(CartDispatchContext);

  const handleAddToCart = () => cartDispatch(addItem(product));
  const handleRemove = () => cartDispatch(removeItem(product));

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", marginBottom: "8px" }}
      >
        <img src={product.image} alt={product.title} height="128px" />
        <div style={{ marginLeft: "8px" }}>
          <h4>{product.title}</h4>
          <b>${product.price}</b>
        </div>
      </div>
      <button onClick={handleAddToCart}>Tambahkan ke keranjang</button>

      {cartState.items[product.id] && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "32px",
          }}
        >
          <p>Jumlah di keranjang : {cartState.items[product.id].amount}</p>
          <button onClick={handleRemove}>Hapus</button>
        </div>
      )}
    </div>
  );
};
