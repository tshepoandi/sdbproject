import React from 'react'
import {HeroWrapper,ContentWrapper,CallToActionButton,HeroImage,Title, TextColorBlue, TextColorWhite} from "./StyledComponents/styledHero"

const HeroPage = () => {
  return (
    <HeroWrapper>
      <HeroImage src={process.env.PUBLIC_URL + '/teacher.jpg'} alt="Hero Image" />
      <ContentWrapper>
        <Title>
          <TextColorWhite>We are an</TextColorWhite> <TextColorBlue>innovative service provider</TextColorBlue><TextColorWhite>offering</TextColorWhite><TextColorBlue>vocational and business education</TextColorBlue> <TextColorWhite>at</TextColorWhite> <TextColorBlue>NQF levels 1-5.</TextColorBlue> 
          <TextColorWhite>Our goal is to make a positive impact on the well-being of our clients</TextColorWhite> <TextColorBlue>within a span of 5 years</TextColorBlue><TextColorWhite>.</TextColorWhite>
        </Title>
        <CallToActionButton>Contact us</CallToActionButton>
      </ContentWrapper>
    </HeroWrapper>
  );
};

export default HeroPage;