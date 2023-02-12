import './App.css';
import './resetStyles.css';
import { OfferSection } from './components/OfferSection';
import { Experience } from './components/Experience';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { ImageSlider } from './components/header/ImageSlider';
import { Destination } from './components/Destination';

function App() {
  return (
    <div className="App">
      <Header/>
      <ImageSlider/>
      <Destination/>
      <Experience/>
      <OfferSection/>
      <Footer/>
      
    </div>
  );
}

export default App;
