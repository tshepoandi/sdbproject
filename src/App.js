import './App.css';
import Contact from './Layout/Components/Contact';
import Footer  from './Layout/Components/Footer';
import HeroPage from './Layout/Components/HeroSection';

import NavigationBar from './Layout/Components/NavBar';
import OurMission from './Layout/Components/OurMission';
import Programmes from './Layout/Components/Programmes';
import CompanyStructure from './Layout/Components/Structure';
function App() {
  return (
  <>
    <NavigationBar id="Home"/>
    <HeroPage id="Home"/>
    <OurMission id="OurMission"/>
    <Programmes id="Programmes"/>
    {/* <CompanyStructure/> */}
    <Contact/>
    <Footer/>
 
  </>
  )
}

export default App;
