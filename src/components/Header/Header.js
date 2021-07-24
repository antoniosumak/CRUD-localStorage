import React, { useContext } from "react";
import { HeaderContainer, HeaderInner, Nav, NavList } from "./HeaderStyles";

import { Button } from "../../lib/styles/generalStyles";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const { setUser } = useContext(AuthContext);
  return (
    <HeaderContainer>
      <HeaderInner>
        <Nav>
          <NavList>
            <Button sidePadding="16" onClick={() => setUser(false)}>
              Logout
            </Button>
          </NavList>
        </Nav>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
