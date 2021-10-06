import { useContext, useState } from "react";
import { CartDispatchContext, CartStateContext } from "../App";
import { addItem, removeItem } from "../state/cart";
import ProductDetailModal from "./ProductDetailModal";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const cartState = useContext(CartStateContext);
  const cartDispatch = useContext(CartDispatchContext);
  const [showDetail, setShowDetail] = useState(false);

  const handleOpenDetail = () => setShowDetail(true);
  const handleCloseDetail = () => setShowDetail(false);
  const handleAddToCart = () => cartDispatch(addItem(product));
  const handleRemove = () => cartDispatch(removeItem(product));

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "8px",
        }}
      >
        <img src={product.image} alt={product.title} height="128px" />
        <div style={{ marginLeft: "8px" }}>
          <h4>{product.title}</h4>
          <div>
            <b>${product.price}</b>
            <button onClick={handleOpenDetail}>Detail</button>
          </div>
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

      <ProductDetailModal
        product={product}
        onRequestClose={handleCloseDetail}
        onRemove={handleRemove}
        onAddToCart={handleAddToCart}
        isOpen={showDetail}
        amount={cartState.items[product.id]?.amount ?? 0}
      />
    </div>
  );
};
