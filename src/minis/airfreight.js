import React from 'react';
import airFreightImage from '../assets/air-freight.jpg';
import Footer from '../components/Footer'; // Import the Footer component

const AirFreightComponent = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="w-1/2 pr-8">
                    <h2 className="text-4xl font-semibold mb-4">Air Freight</h2>
                    <p className="text-gray-700  text-xl mb-4">At AtlasMara Logistics Ltd, we excel in providing top-tier air freight solutions that elevate your business to new heights. Our dedicated team, extensive global network, and unwavering commitment to precision ensure your cargo arrives with speed, security, and efficiency. Trust us for a seamless air freight experience that sets the standard for excellence in global logistics.</p>
                    <p className="text-gray-700 text-xl ">We recognize the critical importance of timing when utilizing air freight services. Each step in the process of handling air freight shipments is executed with great care and a strong sense of urgency.</p>
                </div>
                <div className="w-1/2">
                    <img src={airFreightImage} alt="Air Freight" className="w-full rounded-lg" />
                </div>
            </div>
            <Footer /> {/* Include the Footer component */}
        </div>
    );
};

export default AirFreightComponent;
