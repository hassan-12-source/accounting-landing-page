import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Partnership from './Components/Partnership/Partnership';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Partnership />
      <About />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
