import React from "react";
import {
  Overlay,
  Container,
  Header,
  Title,
  Icon,
  Content,
} from "./PopupStyles";

const Popup = ({ title, children, close }) => {
  return (
    <Overlay>
      <Container>
        <Header>
          {title && <Title>{title}</Title>}
          <Icon onClick={() => close(false)} />
        </Header>
        <Content>{children}</Content>
      </Container>
    </Overlay>
  );
};

export default Popup;
