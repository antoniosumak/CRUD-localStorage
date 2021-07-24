import styled from "styled-components";
import { breakpoints, colors } from "../../lib/styles/theme";
import { IoMdClose } from "react-icons/io";

export const Overlay = styled.div`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  z-index: 101;
  position: absolute;
  padding: 20px;

  top: 0;
  margin-top: 50px;
  width: calc(100% - 32px);
  background-color: ${colors.white};
  border-radius: 10px;
  overflow: hidden;
  @media screen and (${breakpoints.tablet}) {
    width: calc(100% - 80px);
  }
  @media screen and (${breakpoints.desktop}) {
    top: auto;
    margin-top: 0;
    width: auto;
    width: 540px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2``;

export const Icon = styled(IoMdClose)`
  font-size: 24px;
  position: absolute;
  right: 20px;
  cursor: pointer;
  transition: ease-in-out 0.3s;

  &:hover {
    color: ${colors.red};
  }
`;

export const Content = styled.div`
  padding: 16px 0px;

  @media screen and (${breakpoints.tablet}) {
    padding: 32px 0px;
  }
`;
