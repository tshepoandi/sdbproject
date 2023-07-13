import styled from "styled-components";

export const MissionDiv = styled.div`
  margin-top: 100px;
  width: 95%;
  position: relative;
  z-index:-13;
`;

export const Image = styled.img`
    width:100%;
    filter: brightness(50%);
`;

export const Statement = styled.p`
  font-weight:bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10px;
  color: white ;
  text-align: center;
  width: 90%;
  max-width: 600px;
`;

export const PinkText = styled.span`
    color:#FF66CC;
`

export const Heading = styled.h1`
  display:flex;
  margin-bottom: 30px;
  font-size:4rem;
  justify-content:center;
  text-align: center;
  color:#0F52BA;

`