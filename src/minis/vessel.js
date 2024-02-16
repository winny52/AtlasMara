import React from 'react';
import vesselCharteringImage from '../assets/vessel.jpg'; 

const VesselCharteringComponent = () => {
    return (
        <div className="flex items-center">
            <div className="w-1/3">
                <img src={vesselCharteringImage} alt="Vessel Chartering" className="w-full" />
            </div>
            <div className="w-2/3 pl-8">
                <h2 className="text-2xl font-semibold mb-4">Vessel Chartering / Handling</h2>
                <p className="text-gray-700 mb-4">AtlasMara Logistics provides Vessel Chartering, utilizing our extensive knowledge of ship owners and their fleet capacities by selecting the ideal vessels and terminals, whether it’s a bulk carrier or a heavy-lift, and negotiating the most favorable Terms & Conditions.</p>
                <p className="text-gray-700 mb-4">Our seasoned team of logistics professionals is dedicated to ensure the seamless coordination of your global export and import programs. We offer a comprehensive range of services, including stevedoring support and the availability of Trans-shippers for hire or charter, Lashing and latching services with efficient supervision of cargo.</p>
                <p className="text-gray-700">We can also offer consultancy services as we are aware of the specific requirements and unconventional cargo handling that transpire in break bulk vessel handling.</p>
            </div>
        </div>
    );
};

export default VesselCharteringComponent;
