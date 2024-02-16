import React from 'react';
import globalTransportationImage from '../assets/global.jpg'; 

const GlobalTransportationComponent = () => {
    return (
        <div className="flex items-center">
            <div className="w-1/3">
                <img src={globalTransportationImage} alt="Global Transportation" className="w-full" />
            </div>
            <div className="w-2/3 pl-8">
                <h2 className="text-2xl font-semibold mb-4">Global Transportation</h2>
                <p className="text-gray-700 mb-4">At AtlasMara Logistics, our primary objective for door-to-door delivery is to seamlessly collect cargo from the shipper’s location and deliver it directly to the consignee’s door. Our team of dedicated professionals oversees every aspect of the transportation process, ensuring the utmost care for your cargo.</p>
                <p className="text-gray-700 mb-4">We maintain rigorous oversight and coordination with all stakeholders involved, guaranteeing a reliable, punctual, and secure delivery. Whether it’s an import or export, we take charge of your cargo from inception to completion, meticulously planning the most efficient and least congested routes in line with your preferences.</p>
                <p className="text-gray-700">Our transportation service revolves around employing the most effective methods to achieve optimal results. These results must align with both cost-effectiveness and meeting our customer’s service expectations.</p>
            </div>
        </div>
    );
};

export default GlobalTransportationComponent;
