import './styles/App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import PopularUniversities from './components/PopularUniversities/PopularUniversities';
import SearchUniversities from './components/SearchUniversities/SearchUniversities';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <HeroSection/>
        </div>
        <PopularUniversities/>
       <SearchUniversities/>
    </div>
  );
}

export default App;
