import styled from "styled-components";
import { breakpoints, colors } from "../../lib/styles/theme";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  height: 80px;
  background-color: transparent;
  padding: 0px 24px;
  @media screen and (${breakpoints.tablet}) {
    padding: 0px;
  }
`;

export const HeaderInner = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (${breakpoints.tablet}) {
    padding: 0px 24px;
  }
  @media screen and (${breakpoints.desktop}) {
    max-width: 993px;
    margin: 0 auto;
  }
  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 1280px;
    margin: 0 auto;
  }
`;

export const LogoTekst = styled.div``;

export const Nav = styled.nav`
  display: none;
  @media screen and (${breakpoints.tablet}) {
    display: block;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavItems = styled(NavLink)`
  margin: 16px 0px;
  position: relative;
  font-size: 28px;
  text-decoration: none;
  color: ${colors.purple};
  &:last-child {
    margin-right: 0px;
  }
  &:hover {
    cursor: pointer;
  }
  @media screen and (${breakpoints.tablet}) {
    margin: 0px 16px;
    font-size: 16px;
    color: ${colors.black};
    &:before {
      content: "";
      width: 0%;
      transition: 0.3s ease-in-out;
    }
    &:hover {
      cursor: pointer;
      &:before {
        content: "";
        position: absolute;
        display: block;
        bottom: -28px;
        background: ${colors.purple};
        height: 4px;
        width: 100%;
      }
    }
  }
`;

export const Hamburger = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
`;

export const HamburgerLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
  margin-bottom: 5px;
  border-radius: 999px;
  transition: 0.4s ease-in-out;
  transform-origin: 3px;
  &:first-child {
    transform: ${(prop) =>
      prop.navigationOpened ? "rotate(45deg)" : "rotate(0)"};
  }
  &:nth-child(2) {
    opacity: ${(prop) => (prop.navigationOpened ? "0" : "1")};
    transform: ${(prop) =>
      prop.navigationOpened ? "translateX(20px)" : "translateX(0)"};
  }
  &:nth-child(3) {
    transform: ${(prop) =>
      prop.navigationOpened ? "rotate(-45deg)" : "rotate(0)"};
  }
`;

export const HamburgerMenu = styled.div`
  /*  display: ${(props) => (props.navigationOpened ? "flex" : "none")}; */
  display: flex;
  background-color: ${colors.white};
  width: 100%;
  z-index: 100;
  height: calc(100% - 80px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 80px;
  transition: 0.3s ease-in-out;
  top: 0;
  right: ${(props) => (props.navigationOpened ? "0px" : "-100%")};
  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
`;
