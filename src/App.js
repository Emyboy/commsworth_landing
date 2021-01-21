import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUs from './components/AboutUs';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import OurStory from './components/OurStory';
import Partners from './components/Partners';
import Projects from './components/Projects';
import Servicies from './components/Servicies';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbo />
      <div className='gray mb-5'>
        <div className='container'>
          <AboutUs />
          <OurStory />
        </div>
      </div>
      <div className='container'>
        <Servicies />
      </div>
      <Projects />
      <div className='gray'>
        <Partners />
      </div>
      <div className='container'>
        <Blog />
      </div>
      <Footer />
    </div>
  );
}

export default App;
