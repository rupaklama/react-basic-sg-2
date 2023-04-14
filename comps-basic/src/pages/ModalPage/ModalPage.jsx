import { useState } from "react";
import Button from "../../components/Button/Button";
import Modal from "../../components/modal/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const onClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Button primary onClick={onClick}>
        Open Modal
      </Button>
      {showModal && <Modal />}
    </div>
  );
};
export default ModalPage;
