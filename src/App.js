import './App.css';
import SocialLinks from './Components/SocialLinks/SocialLinks';
import ScrollTopBtn from './Components/Scroll-to-top/ScrollTopBtn';
import Navigation from './Components/Navigation/Navigation';
import Hero from './Components/Hero/Hero';
// import ImagesFlow from './Components/Hero/ImagesFlow/ImagesFlow';
import About from './Components/About/About';
import Tours from './Components/Tours/Tours';
import TeamMembers from './Components/Team/Members';
import Testimonials from './Components/Testimonials/Testimonials';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <ScrollTopBtn />
      <Navigation />
      <SocialLinks />
      <Hero />
      <Tours />
      <About />
      <TeamMembers />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
