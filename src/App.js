import './App.css';
import './resetStyles.css';
import { OfferSection } from './components/OfferSection';
import { Experience } from './components/Experience';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Experience/>
      <OfferSection/>
      <Footer/>
      
    </div>
  );
}

export default App;
