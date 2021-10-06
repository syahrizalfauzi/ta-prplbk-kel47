import React from "react";
import Modal from "react-modal";
import "./ProductDetailModal.css";

const ProductDetailModal = ({
  isOpen,
  onRequestClose,
  product,
  amount,
  onRemove,
  onAddToCart,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <div id="product-detail-body">
        <img src={product.image} alt={product.title} height="256px" />
        <div style={{ marginLeft: "32px", flex: 1 }}>
          <h1>{product.title}</h1>
          <h2>${product.price}</h2>
          <p>Jumlah di keranjang :</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <button onClick={onRemove}>-</button>
            <p>{amount}</p>
            <button onClick={onAddToCart}>+</button>
          </div>
        </div>
      </div>
      <p>{product.description}</p>
      <button style={{ float: "right" }} onClick={onRequestClose}>
        Tutup
      </button>
    </Modal>
  );
};

export default ProductDetailModal;
