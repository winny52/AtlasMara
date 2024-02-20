import React from 'react';
import globalTransportationImage from '../assets/global.jpg';
import Footer from '../components/Footer';

const GlobalTransportationComponent = () => {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex-grow flex items-center">
                <div className="w-1/2"> {/* Adjusted width to 1/2 */}
                    <img src={globalTransportationImage} alt="Global Transportation" className="w-full" />
                </div>
                <div className="w-1/2 pl-8 pt-7"> {/* Adjusted width to 1/2 */}
                    <h2 className="text-5xl font-semibold mb-4">Global Transportation</h2>
                    <p className="text-gray-700 text-xl mb-4">At AtlasMara Logistics, our primary objective for door-to-door delivery is to seamlessly collect cargo from the shipper’s location and deliver it directly to the consignee’s door. Our team of dedicated professionals oversees every aspect of the transportation process, ensuring the utmost care for your cargo.</p>
                    <p className="text-gray-700 text-xl mb-4">We maintain rigorous oversight and coordination with all stakeholders involved, guaranteeing a reliable, punctual, and secure delivery. Whether it’s an import or export, we take charge of your cargo from inception to completion, meticulously planning the most efficient and least congested routes in line with your preferences.</p>
                    <p className="text-gray-700 text-xl">Our transportation service revolves around employing the most effective methods to achieve optimal results. These results must align with both cost-effectiveness and meeting our customer’s service expectations.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GlobalTransportationComponent;
