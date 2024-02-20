import React from 'react';
import hazardousCargoImage from '../assets/hazardous.jpg';
import Footer from '../components/Footer'; // Import the Footer component

const HazardousCargoComponent = () => {
    return (
        <div className=' h-screen flex flex-col'>
            <div className="flex items-center">
                <div className="w-1/3">
                    <img src={hazardousCargoImage} alt="Hazardous Cargo" className="w-full" />
                </div>
                <div className="w-2/3 pl-8">
                    <h2 className="text-2xl font-semibold mb-4">Hazardous Cargo</h2>
                    <p className="text-gray-700  text-xl mb-4">With a wealth of expertise and knowledge inherited since our company’s inception, AtlasMara Logistics has consistently earned the trust to handle hazardous cargo, meeting the highest standards. When it comes to transporting delicate materials like oil, gas, or chemicals, AtlasMara Logistics prioritizes their safe and secure delivery.</p>
                    <p className="text-gray-700 text-xl  mb-4">We handle such sensitive shipments with the utmost care, adhering to responsible practices that safeguard your cargo, our crew members, and the environment. Our team efficiently manages all fiscal and statutory requirements, ensuring full compliance with regulations. We possess a comprehensive understanding of IMO classifications, adhering to the do’s and don’ts with unwavering commitment. Our track record with cargoes of this nature solidifies our position as a trusted partner for future shipments.</p>
                    <p className="text-gray-700 text-xl ">Our skilled and well-trained staff are equipped to manage the National, International, and Local Transportation needs, along with the safety requirements of hazardous cargo. They maintain constant communication with both carriers and customers to guarantee the reliable and secure delivery of the cargo.</p>
                </div>
            </div>
            <Footer /> {/* Include the Footer component */}
        </div>
    );
};

export default HazardousCargoComponent;
