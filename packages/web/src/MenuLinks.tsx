import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const MenuLinks: React.FC = () => (
  <>
    <MenuLink exact to="/">
      Home
    </MenuLink>
    {/*<MenuLink to="/store">Store</MenuLink>*/}
    <MenuLink to="/statement">Statement</MenuLink>
    <MenuLink to="/processes">Processes</MenuLink>
    {/*<MenuLink to="/images">Images</MenuLink>*/}
    <MenuLink to="/bio-and-contact">Bio and Contact</MenuLink>
  </>
);

export default MenuLinks;
