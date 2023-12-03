import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalDiv, ButtonClose } from "./Modal.styled";
import CardModal from "../CardModal/CardModal";
import {ReactComponent as Icon} from "../../assets/x.svg"

const modalRoot = document.querySelector("#modal-root");
export const Modal = ({ onClose, advert }) => {
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalDiv>
        <ButtonClose onClick={onClose}>
        <Icon></Icon>
      </ButtonClose>
        <CardModal advert={advert}></CardModal>
      </ModalDiv>
    </Backdrop>,
    modalRoot
  );
};
