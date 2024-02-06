
import React from 'react';
import CardList from './Views';
const AboutUs = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="max-w">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://plus.unsplash.com/premium_photo-1661932036915-4fd90bec6e8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  
            alt="About Us"
            className="w-full h-64 object-cover object-center mt-12"
          />
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-5">Who We Are</h2>

            <p className="text-gray-700">
            Founded in 2015 in Kericho, AtlasMara Logistics Kenya  Ltd has evolved over the years into a multifaceted logistics service provider. Throughout our journey, we have consistently made our customers’ needs the focal point of our operations, ensuring their satisfaction remains our top priority.
Our unwavering commitment to customer service has driven us to maintain the highest standards in all facets of our operations. We take pride in offering our customers comprehensive solutions under one roof, where reliability and professionalism are the cornerstones of our corporate culture..
            </p>
            
            <div className="p-6 ">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>

            <p className="text-gray-700grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white rounded-lg overflow-hidden shadow-lg">
            Founded in 2015 in Kericho, AtlasMara Logistics Kenya  Ltd has evolved over the years into a multifaceted logistics service provider. Throughout our journey, we have consistently made our customers’ needs the focal point of our operations, ensuring their satisfaction remains our top priority.
Our unwavering commitment to customer service has driven us to maintain the highest standards in all facets of our operations. We take pride in offering our customers comprehensive solutions under one roof, where reliability and professionalism are the cornerstones of our corporate culture..
            </p>
            <img
            src="https://plus.unsplash.com/premium_photo-1661932036915-4fd90bec6e8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  
            alt="About Us"
            className="w-full h-64 object-cover "
          />
          </div>
        </div>
        </div>
      </div>
      <CardList/>
    </div>
  );
};

export default AboutUs;
