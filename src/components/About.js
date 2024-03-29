import React from 'react';
import CardList from './Views';
import Footer from './Footer';
import backgroundImage from '../assets/conback.jpg';

const AboutUs = () => {
    return (
        <div className="min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <div className="container mx-auto mt-10">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white rounded-lg overflow-hidden shadow-lg">
                    <img
                        src="https://i.pinimg.com/564x/6d/b0/d0/6db0d08b11fcce0e13f136db005e4874.jpg"  
                        alt="About Us"
                        className="w-full h-auto object-cover object-center"
                    />
                    <div className="p-6">
                        <h2 className="text-3xl font-bold mb-5">Who We Are</h2>
                        <p className="text-gray-700">
                            Founded in 2015 in  Nairobi, Atlas Mara has evolved over the years into a multifaceted logistics service provider. Throughout our journey, we have consistently made our customers’ needs the focal point of our operations, ensuring their satisfaction remains our top priority. Our unwavering commitment to customer service has driven us to maintain the highest standards in all facets of our operations. We take pride in offering our customers comprehensive solutions under one roof, where reliability and professionalism are the cornerstones of our corporate culture.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white rounded-lg overflow-hidden shadow-lg mt-6">
                    <div className="p-6">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
                        <p className="text-gray-700">
                        Atlas Mara  stands out for its proven expertise in the logistics industry. We offer comprehensive solutions that are tailored to your needs, ensuring that every aspect of your shipment is handled with care. Our customer-centric approach places your satisfaction at the core of our operations, and we take pride in maintaining the highest standards of reliability and professionalism. With a network of global partnerships, we can provide you with the support and coverage you need. Choose Atlas Mara  for a dedicated commitment to excellence in every aspect of your logistics experience.
                        </p>
                    </div>
                    <img
                        src="https://i.pinimg.com/564x/7b/95/7e/7b957eb7de7d32dffd3928f59e76a430.jpg"  
                        alt="Why Choose Us"
                        className="w-full h-auto object-cover object-center"
                    />
                </div>
            </div>
            <CardList/>
            
            <Footer />
        </div>
        </div>
    );
};

export default AboutUs;
