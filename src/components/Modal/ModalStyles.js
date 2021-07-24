import styled from "styled-components";
import { boxShadow, breakpoints } from "../../lib/styles/theme";

export const ModalWrapper = styled.div`
  padding: 20px;
  width: 95%;
  border-radius: 20px;
  margin: 0 auto;
  height: min-content;
  box-shadow: ${boxShadow};

  @media screen and (${breakpoints.tablet}) {
    width: 300px;
    margin: 0 auto;
  }

  @media screen and (${breakpoints.desktop}) {
    width: 400px;
  }
`;

export const Title = styled.h2`
  margin: 16px auto;
  @media screen and (${breakpoints.tablet}) {
    width: 90%;
  }
`;
