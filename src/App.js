import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import OurStory from './components/OurStory';
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
    </div>
  );
}

export default App;
