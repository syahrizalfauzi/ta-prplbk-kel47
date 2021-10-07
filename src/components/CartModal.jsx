import { useContext, useMemo } from "react";
import Modal from "react-modal";
import { CartDispatchContext, CartStateContext } from "../App";
import { closeModal, showModal } from "../state/cart";
import "./CartModal.css";

const CartModal = () => {
  const { step, items } = useContext(CartStateContext);
  const cartDispatch = useContext(CartDispatchContext);
  const totalPrice = useMemo(() => {
    let countedPrice = 0;
    for (const id in items) {
      countedPrice += items[id].price * items[id].amount;
    }
    return countedPrice.toFixed(2);
  }, [items]);

  const handleCloseModal = () => cartDispatch(closeModal());
  const handleOpenAddress = () => cartDispatch(showModal(2));

  return (
    <Modal
      isOpen={step === 1}
      onRequestClose={handleCloseModal}
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
      <h1>Keranjang Pesanan</h1>
      {Object.keys(items).length !== 0 ? (
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Produk</th>
              <th>Harga</th>
              <th>Jumlah</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(items).map((id) => {
              const product = items[id];
              return (
                <tr key={id}>
                  <td style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={product.image}
                      alt={product.title}
                      id="product-image"
                    />
                    <b>{product.title}</b>
                  </td>
                  <td>${product.price}</td>
                  <td>{product.amount}</td>
                  <td>
                    $
                    {(Number(product.price) * Number(product.amount)).toFixed(
                      2
                    )}
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan={3}></td>
              <td>
                <b>${totalPrice}</b>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Keranjang masih kosong...</p>
      )}
      <div>
        <button onClick={handleCloseModal}>Tutup</button>
        {Object.keys(items).length !== 0 && (
          <button onClick={handleOpenAddress}>Lanjut</button>
        )}
      </div>
    </Modal>
  );
};

export default CartModal;
