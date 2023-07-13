import React from 'react'
import { Container,RectangleImage,ContentWrapper,Title,Subheading,ItemList,ListItem } from './Styles/StyledMission';
const Programmes = () => {
  return (
    <Container>
      <RectangleImage src={process.env.PUBLIC_URL + '/welder.jpg'} alt="Welder" />
      <ContentWrapper>
        <Title>ONESETA</Title>
        <Subheading>Lorem Ipsum 30</Subheading>
        <ItemList>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
          <ListItem>Item 4</ListItem>
          <ListItem>Item 5</ListItem>
          <ListItem>Item 6</ListItem>
          <ListItem>Item 7</ListItem>
          <ListItem>Item 8</ListItem>
        </ItemList>
      </ContentWrapper>
    </Container>
  );
};

export default Programmes;