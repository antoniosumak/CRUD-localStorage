import React from "react";
import { ModalWrapper, Title } from "./ModalStyles";

const Modal = ({ children, title }) => {
  return (
    <ModalWrapper>
      {title && <Title>{title}</Title>}
      {children}
    </ModalWrapper>
  );
};

export default Modal;
