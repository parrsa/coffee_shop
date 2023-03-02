import logo from './logo.svg';
import './App.css';
import Nav from './Component/Navbar/Nav';
import Landing from './Component/LandingPage/Landing';
import Menu from './Component/Menu/Menu';
import Equipment from './Component/CoffeEquipment/Equipment';
import Contact from './Component/ContactMe/Contact';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div className="bg-[#292F32] overflow-hidden">
     <Nav/>
     <Landing/>
     <Menu/>
     <Equipment/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
