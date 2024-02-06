import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import AboutUs from './components/About';
import Contact from './components/Contact';
import Home  from "./components/Home";
import Services from './components/Services';

function App() {
  return (

    <div className="App">
      <Navbar/>
      <div className="pt-20">
     <Routes>
     <Route path='/About'element={<AboutUs/>}/>
     <Route path='/Services'element={<Services/>}/>
     <Route path='/Contact'element={<Contact/>}/>
     <Route  exact path='/'element={<Home/>}/>
     </Routes>
    </div>
    </div>
  );
}

export default App;
