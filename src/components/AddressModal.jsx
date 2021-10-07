import { useContext, useState } from "react";
import Modal from "react-modal";
import { CartDispatchContext, CartStateContext } from "../App";
import { showModal } from "../state/cart";

const AddresModal = () => {
  const { step } = useContext(CartStateContext);
  const cartDispatch = useContext(CartDispatchContext);
  const [alamat, setAlamat] = useState("");
  const [penerima, setPenerima] = useState("");

  const handleNext = () => cartDispatch(showModal(3));
  const handleBack = () => cartDispatch(showModal(1));
  const handleAlamat = (e) => setAlamat(e.target.value);
  const handlePenerima = (e) => setPenerima(e.target.value);

  return (
    <Modal
      isOpen={step === 2}
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
      <h1>Alamat</h1>
      <p>Silahkan masukkan alamat tujuan pengiriman dan penerima</p>
      <div>
        <input
          type="text"
          placeholder="Alamat"
          required
          onChange={handleAlamat}
          value={alamat}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Nama Penerima"
          required
          onChange={handlePenerima}
          value={penerima}
        />
      </div>
      <button onClick={handleBack}>Kembali</button>
      {alamat !== "" && penerima !== "" && (
        <button onClick={handleNext}>Lanjut</button>
      )}
    </Modal>
  );
};

export default AddresModal;
