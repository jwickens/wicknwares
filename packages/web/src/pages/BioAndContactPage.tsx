import React from "react";
import styled from "styled-components";
import bioImg from "../images/bio.jpg";
import { Paragraph } from "../typography";
import Page from "../components/Page";

const BioImage = styled.img`
  width: 60%;
`;
const BioWrapper = styled.div``;
const SocialWrapper = styled.div``;

const BioAndContactPage: React.FC = () => (
  <Page title="About">
    <BioImage src={bioImg} />
    <BioWrapper>
      <Paragraph>
        Being raised in the US gave me the opportunity to explore my passions
        uninhabited. I had the pleasure of studying natural sciences at Humboldt
        State University were I attained my BS in Wildlife Management and
        Conservation as well as a passion for Arts and Crafts. Working in the
        ceramic studio, I learned the value of practicing art and cultivating
        community. After 2 years working as a studio technician for HSU, I was
        invited to Sugar Maples Center for the Creative Arts in New York to
        participate as a studio assistant where I facilitated workshops and
        community firings.
      </Paragraph>
      <Paragraph>
        Currently, I am working in Mendocino CA, at Aum Pottery as a woodfire
        technician and production potter. If you would like to see what we do,
        please feel free to contact me:
      </Paragraph>
    </BioWrapper>
    <SocialWrapper>
      <Paragraph>
        <b>Email:</b>{" "}
        <a href="mailto:matthewwickens@icloud.com">matthewwickens@icloud.com</a>
      </Paragraph>
      <Paragraph>
        <b>Instagram:</b>
        <a href="https://www.instagram.com/wick_n_wares/">@wick_n_wares</a>
      </Paragraph>
      <Paragraph>
        <b>Facebook:</b> <a href="www.facebook.com/wickNware">@wickNware</a>
      </Paragraph>
    </SocialWrapper>
  </Page>
);

export default BioAndContactPage;
