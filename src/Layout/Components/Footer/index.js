import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const FooterItem = styled.p`
  margin: 5px;
`;

const Footer = () => {
  // Generate random content for the footer
  const footerContent = [
    'Terms of Service',
    'Privacy Policy',
    'FAQ',
  ];

  return (
    <FooterContainer>
      <FooterWrapper>
        {footerContent.map((item, index) => (
          <FooterItem key={index}>{item}</FooterItem>
        ))}
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
