import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './pages/hero/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          
            
        </Routes>
      </Router>
      <Footer/>

      
    </div>
  );
}

export default App;
