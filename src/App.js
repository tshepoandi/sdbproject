import './App.css';
import HeroPage from './Layout/Components/HeroSection';
// import MercSeta from './Layout/Components/MercSeta';
import NavigationBar from './Layout/Components/NavBar';
import OurMission from './Layout/Components/OurMission';
import Programmes from './Layout/Components/Programmes';
function App() {
  return (
  <>
    <NavigationBar id="Home"/>
    <HeroPage id="Home"/>
    <OurMission id="OurMission"/>
    <Programmes id="Programmes"/>
    {/* <MercSeta/> */}
  </>
  )
}

export default App;
