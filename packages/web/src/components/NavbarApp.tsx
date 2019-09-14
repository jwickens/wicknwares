import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ReactSidebar from "react-sidebar";
import { withRouter, RouteComponentProps } from "react-router-dom";

import MenuLinks from "../MenuLinks";
import { Logo } from "./icons";
import Routes from "../Routes";

const NavbarContainerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const NavbarWrapper = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  background-color: black;
  justify-content: space-between;
`;
interface HamburgerProps {
  onClick: React.MouseEventHandler;
}

const HamburgerButton = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
`;
const Hamburger: React.FC<HamburgerProps> = ({ onClick }) => (
  <HamburgerButton aria-role="button" onClick={onClick}>
    <FontAwesomeIcon icon={faBars} color="white" size={"2x"} />
  </HamburgerButton>
);

const MainPanelWrapper = styled.div`
  display: flex;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
`;

const MenuLinkWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 2em;
  overflow: hidden;
`;

const NavbarContainer: React.FC<RouteComponentProps> = ({
  children,
  history
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  function handleHamburgerClick() {
    setMenuIsOpen(state => !state);
  }
  useEffect(() => {
    const unlisten = history.listen(() => {
      setMenuIsOpen(false);
    });
    return unlisten;
  }, [history]);
  return (
    <NavbarContainerWrapper>
      <ReactSidebar
        sidebar={
          <MenuLinkWrapper>
            <MenuLinks />
          </MenuLinkWrapper>
        }
        onSetOpen={setMenuIsOpen}
        open={menuIsOpen}
      >
        <NavbarWrapper>
          <Logo height={50} />
          <Hamburger onClick={handleHamburgerClick} />
        </NavbarWrapper>

        <MainPanelWrapper>
          <Routes />
        </MainPanelWrapper>
      </ReactSidebar>
    </NavbarContainerWrapper>
  );
};

export default withRouter(NavbarContainer);
