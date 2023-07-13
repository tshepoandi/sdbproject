import React, { useState } from 'react';
import {
  NavbarWrapper,
  MenuItem,
  Logo,
  ListOfNavItems,
  HamburgerIcon
} from './StyledComponents/styledNavbar.js';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarWrapper id='NavigationBar'>
      <Logo src={process.env.PUBLIC_URL + '/sedibengTrainingLogo.png'} alt="Logo" />
      <HamburgerIcon
        src={process.env.PUBLIC_URL + '/menuBar.png'}
        alt="Menu"
        isOpen={isOpen}
        onClick={toggleMenu}
      />
      <ListOfNavItems isOpen={isOpen}>
        <MenuItem className="navItem">Home</MenuItem>
        <MenuItem className="navItem">Our Vision</MenuItem>
        <MenuItem className="navItem">Our Mission</MenuItem>
        <MenuItem className="navItem">Contact</MenuItem>
      </ListOfNavItems>
    </NavbarWrapper>
  );
};

export default NavigationBar;