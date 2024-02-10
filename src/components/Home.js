import React from 'react';
import CardList from './Views';
import ServiceCardList from './ServicesCard';
import './Home.css';
import Affiliation from "../components/Affiliation";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="min-h-screen">
            <div className="bg-hero-pattern bg-cover min-h-screen flex items-center justify-center relative animate-background">
                <div className="container mx-auto px-3 text-center text-white relative z-10 animate-fade-in-up">
                    <h1 className="text-4xl font-bold mb-4">Atlas Mara</h1>
                    <p className="text-gray-300 mb-8">Your Caring Logistics Partner</p>
                    <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-700">
                        Explore More
                    </button>
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
