import { useState } from 'react';
import Header from './Components/Header/header';
import './App.css';
import Hero from './Components/Hero/hero';
import Gallery from './Components/Gallery/Gallery';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
     
    </>
  );
}

export default App;
