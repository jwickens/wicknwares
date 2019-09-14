import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "./icons";
import MenuLinks from "../MenuLinks";
import Routes from "../Routes";

const SidebarLinksWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  padding-margin: 2em;
  width: 100%;
`;

const Title = styled.h1`
  font-family: "Avant Garde";
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5em;
  padding-right: 0.5em;
  text-transform: uppercase;
`;

const StyledLogo = styled(Logo)`
  margin-left: auto;
  margin-right: auto;
`;

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0 0 4em;
  background-color: black;
  color: white;
  padding-top: 1.2em;
`;

const AppWrapperForSidebar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

const MainPanelWrapper = styled.div`
  flex: 1 0 0;
  overflow-y: auto;
`;

const SidebarContainer: React.FC = ({ children }) => {
  return (
    <AppWrapperForSidebar>
      <SidebarWrapper>
        <StyledLogo height={100} />
        <Title>Matthew Wickens</Title>
        <SidebarLinksWrapper>
          <MenuLinks />
        </SidebarLinksWrapper>
      </SidebarWrapper>
      <MainPanelWrapper>
        <Routes />
      </MainPanelWrapper>
    </AppWrapperForSidebar>
  );
};

export default SidebarContainer;
