import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import AboutUs from './components/About';
import Contact from './components/Contact';
import Home from "./components/Home";
import Services from './components/Services';
import Warehousing from "./minis/warehousing";
import AirFreightComponent from "./minis/airfreight";
import SeaFreight from "./minis/seafreight";
import GlobalTransportationComponent from "./minis/global";
import HazardousCargoComponent from "./minis/hazardous";
import ReeferCargoComponent from "./minis/reefer";
import CustomBrokerageComponent from "./minis/custom";


function App() {
    return (
        <div className="text-center" style={{backgroundImage: 'url("https://i.pinimg.com/564x/18/38/85/18388544be2f607f14bf5dc93717eacc.jpg1")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>

        <Navbar />
            <div className="pt-20">
                <Routes>
                    <Route path='/About' element={<AboutUs />} />
                    <Route path='/Services' element={<Services />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/warehousing' element={<Warehousing/>}/>
                    <Route path='/airfreight' element={<AirFreightComponent/>}/>
                    <Route path='/seafreight' element={<SeaFreight/>}/>
                    <Route path='/globaltransportation' element={<GlobalTransportationComponent/>}/>
                    <Route path='/hazardouscargo' element={<HazardousCargoComponent/>}/>
                    <Route path='/reefercargo' element={<ReeferCargoComponent/>}/>
                    <Route path='/custombrokerage' element={<CustomBrokerageComponent/>}/>
                    

                </Routes>
            </div>
        </div>
    );
}

export default App;
