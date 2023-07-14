import React, { useState, useEffect } from 'react';
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
    const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <NavbarWrapper id='NavigationBar' expand="md" className={scrolled ? "scrolled" : ""} >
      <Logo src={process.env.PUBLIC_URL + '/sedibengTrainingLogo.png'} alt="Logo" />
      <HamburgerIcon
        src={process.env.PUBLIC_URL + '/menuBar.png'}
        alt="Menu"
        isOpen={isOpen}
        onClick={toggleMenu}
      />
      <ListOfNavItems isOpen={isOpen}>
        <MenuItem className={ activeLink === "Home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("Home")}>Home</MenuItem>
        <MenuItem className={ activeLink === "OurVision" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("OurVision")} >Our Mission</MenuItem>
        <MenuItem className={ activeLink === "Programmes" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("Programmes")} >Programmes</MenuItem>
        <MenuItem href='#Contact' className={  activeLink === "Contact" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("Contact")}  >Contact</MenuItem>
      </ListOfNavItems>
    </NavbarWrapper>
  );
};

export default NavigationBar;
