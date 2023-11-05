import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
