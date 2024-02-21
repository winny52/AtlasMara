import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import CardList from './Views';
import ServiceCardList from './ServicesCard';
import './Home.css';
import Affiliation from "../components/Affiliation";
import Footer from "../components/Footer";


import backgroundImage from '../assets/conback.jpg'; // Import the background image

const Home = () => {
    return (
        <div className="min-h-screen " style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <div className="bg-hero-pattern bg-cover min-h-screen flex items-center justify-center relative animate-background ">
                <div className="container mx-auto px-3 text-center text-white relative z-10 animate-fade-in-up">
                    <h1 className="text-9xl text-black font-bold mb-4">Atlas Mara</h1>
                    <p className="text-gray-900 text-4xl  mb-48">Your Caring Logistics Partner</p>
                    {/* Replace the button with Link */}
                    <Link to="/about">
                        <button className="bg-blue-700 text-white text-4xl px-8 py-3 rounded-full hover:bg-blue-700 mb-8">
                            Explore More
                        </button>
                    </Link>
                    <div className="mb-72"></div>
                    <CardList />
                    <ServiceCardList />
                    <Affiliation />
                    <Footer />
                </div>
                <div className="lamination"></div>
            </div>
        </div>
    );
};

export default Home;
