import styled from 'styled-components';

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -2;
`;

export const HeroImage = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(70%)
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 30px;
  @media (max-width: 768px){
    font-size:17px;
    width:150%;
  }
`;

export const TextColorBlue = styled.span`
  color: #0F52BA;
`;

export const TextColorWhite = styled.span`
  color: #ffffff;
`;

export const CallToActionButton = styled.button`
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #ff66cc;
  }
`;