import './app.scss';
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Seasonal from './components/seasonal/Seasonal';
import Background from './components/background/Background';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import BurgerMenu from './components/burgermenu/BurgerMenu';

function App() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  
  return (
    <div className="App">
      <Navbar burgerMenuOpen={burgerMenuOpen} setBurgerMenuOpen={setBurgerMenuOpen} />
      <BurgerMenu burgerMenuOpen={burgerMenuOpen} setBurgerMenuOpen={setBurgerMenuOpen} />
      <Background />
      <Hero />
      <Seasonal />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
