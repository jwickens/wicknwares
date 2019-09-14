import React from "react";
import styled from "styled-components";

import img1 from "../images/home/IMG_1.jpg";
import img2 from "../images/home/IMG_2.jpg";
import img3 from "../images/home/IMG_3.jpg";
import img4 from "../images/home/IMG_4.jpg";
import img5 from "../images/home/IMG_5.jpg";
import img6 from "../images/home/IMG_6.jpg";

const PageWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const HomePageImageWrapper = styled.img`
  width: ${props => props.width}vw;
  height: 40vh;
  object-fit: cover;
  flex: 0 0 auto;
  padding-top: 1em;
  margin-left: 5px;
  margin-bottom: 8px;
`;

interface HomePageImageProps {
  src: string;
  width: number;
}

const HomePageImage: React.FC<HomePageImageProps> = ({ src, width }) => (
  <HomePageImageWrapper src={src} width={width} />
);

const HomePage: React.FC = () => (
  <PageWrapper>
    <HomePageImage width={24} src={img1} />
    <HomePageImage width={20} src={img2} />
    <HomePageImage width={26} src={img3} />
    <HomePageImage width={15} src={img4} />
    <HomePageImage width={40} src={img5} />
    <HomePageImage width={40} src={img6} />
  </PageWrapper>
);

export default HomePage;
