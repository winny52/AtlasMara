import React from 'react';
import customBrokerageImage from '../assets/custom-brokerage.jpg';
const CustomBrokerageComponent = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="w-1/2">
                <img src={customBrokerageImage} alt="Custom Brokerage" className="w-full rounded-lg" />
            </div>
            <div className="w-1/2 pl-8">
                <h2 className="text-2xl font-semibold mb-4">Custom Brokerage</h2>
                <p className="text-gray-700 mb-4">AtlasMara Logistics  Ltd is an authorized customs clearance company in Pakistan, specializing in streamlining the intricate processes associated with the transportation of shipments.</p>
                <p className="text-gray-700 mb-4">AtlasMara being a customs licensed broker help your goods clear quickly and efficiently by taking advantage of the latest Customs release initiatives and reviewing your product to make sure they comply with specific regulations.</p>
                <p className="text-gray-700">Custom clearance is a multifaceted undertaking, encompassing meticulous preparation and submission of essential documentation, essential for the smooth flow of imports and exports. These critical tasks are entrusted to customs clearance agents, also known as Clearing Forwarding Agents, who not only prepare and submit documents but also can guide you through the complexity of customs formalities, regulations, and compliances. Seagate Logistics stands as your expert partner, simplifying this essential aspect of global trade.</p>
            </div>
        </div>
    );
};

export default CustomBrokerageComponent;