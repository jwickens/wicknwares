import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { withRouter, RouteComponentProps } from "react-router-dom";

export const LogoImg = styled.img`
  height: ${props => props.height}px;
  object-fit: contain;
  flex: 0 0 auto;
`;

interface LogoProps extends RouteComponentProps {
  height: number;
}

const UnconnectedLogo: React.FC<LogoProps> = props => {
  const { history } = props;
  function handleClick() {
    history.push("/");
  }
  return <LogoImg onClick={handleClick} {...props} src={logo} />;
};

export const Logo = withRouter(UnconnectedLogo);
