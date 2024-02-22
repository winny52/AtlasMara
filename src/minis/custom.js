import React from 'react';
import customBrokerageImage from '../assets/custom-brokerage.jpg';
import Footer from '../components/Footer';

const CustomBrokerageComponent = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <img src={customBrokerageImage} alt="Custom Brokerage" className="w-full rounded-lg" />
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <h2 className="text-4xl font-semibold mb-4">Custom Brokerage</h2>
                    <p className="text-gray-700 text-lg mb-4">AtlasMara Logistics  Ltd is an authorized customs clearance company in  Kenya, specializing in streamlining the intricate processes associated with the transportation of shipments.</p>
                    <p className="text-gray-700 text-lg mb-4">AtlasMara being a customs licensed broker help your goods clear quickly and efficiently by taking advantage of the latest Customs release initiatives and reviewing your product to make sure they comply with specific regulations.</p>
                    <p className="text-gray-700 text-lg">Custom clearance is a multifaceted undertaking, encompassing meticulous preparation and submission of essential documentation, essential for the smooth flow of imports and exports. These critical tasks are entrusted to customs clearance agents, also known as Clearing Forwarding Agents, who not only prepare and submit documents but also can guide you through the complexity of customs formalities, regulations, and compliances. AtlasMara Logistics stands as your expert partner, simplifying this essential aspect of global trade.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CustomBrokerageComponent;
