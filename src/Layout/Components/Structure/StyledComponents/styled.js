import styled, { keyframes } from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  padding: 20px;
`;

export const Card = styled.div`
  width: 200px;
  height: 200px;
  background-color: #f1f1f1;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CardTitle = styled.h1`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CardSubtitle = styled.p`
  font-size: 14px;
`;

export const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;