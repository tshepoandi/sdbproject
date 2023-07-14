import styled from 'styled-components'

export const NavbarWrapper = styled.nav `
  justify-content: space-around;
  width: 100%;
  background-color: #0F52BA;
  margin-top: 20px;
  padding: 20px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  position:fixed;
`;

export const Logo = styled.img `
  width: 80px;
  height:80px;
  border-radius:10px;
`;

export const MenuItem = styled.li `
  display: inline-block;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #FF66CC;
    color: white;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    padding: 15px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
  }
`;

export const ListOfNavItems = styled.ul `
  display: flex;
  flex-direction: row;
  margin-right: 10%;

  @media (max-width: 768px) {
    padding-top:35%;
    flex-direction: column;
    position: absolute;
    top: 90%;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }
`;

export const HamburgerIcon = styled.img `
  display: none;
  position: fixed;
  cursor: pointer;
  z-index: 999;
  right: 0px;

  @media (max-width: 768px) {
    display: block;
    width: 25px;
    cursor: pointer;
    margin-right: 50px;

  }
`;