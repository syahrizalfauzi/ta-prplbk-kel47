import { useContext, useMemo } from "react";
import Modal from "react-modal";
import { CartDispatchContext, CartStateContext } from "../App";
import { closeModal } from "../state/cart";
import "./PaymentModal.css";

const PaymentModal = () => {
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

  return (
    <Modal
      isOpen={step === 2}
    >
      <h1>Pembayaran</h1>
      <p>Silahkan lakukan pembayaran ke salah satu rekening berikut sebanyak</p>
      <b>${totalPrice}</b>
      <h2>BNI</h2>
      <p>21120118130066 a.n. Muhammad Syahrizal Fauzi</p>
      <h2>BCA</h2>
      <p>21120118140071 a.n. Muhammad Dzaky Naufal</p>
      <button onClick={handleCloseModal}>Selesai & Tutup</button>
    </Modal>
  );
};

export default PaymentModal;
