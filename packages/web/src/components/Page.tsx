import React, { useEffect } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  title: string;
}

const PageWrapper = styled.div`
  padding: 5%;
`;

const Title = styled.h1``;
const Page: React.FC<Props> = ({ children, title }) => {
  useEffect(() => {
    window.name = `WickNWares - ${title}`;
  }, []);
  return (
    <PageWrapper>
      <Title>{title}</Title>
      {children}
    </PageWrapper>
  );
};

export default Page;
