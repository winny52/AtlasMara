import React from 'react';
import reeferCargoImage from '../assets/reefercargoimg.jpg'; 
const ReeferCargoComponent = () => {
    return (
        <div className="flex items-center">
            <div className="w-1/3">
                <img src={reeferCargoImage} alt="Reefer Cargo" className="w-full" />
            </div>
            <div className="w-2/3 pl-8">
                <h2 className="text-2xl font-semibold mb-4">Reefer Cargo</h2>
                <p className="text-gray-700 mb-4">Refrigerated cargo logistics is all about precision – Customers need commodity expertise, seamless handovers, flexible processes and end-to-end visibility to ensure zero wastage during transit.</p>
                <p className="text-gray-700 mb-4">With a commitment to deliver the highest quality service we specialize in transporting temperature-sensitive goods such as fresh produce, meat, seafood, and dairy products. Our team of experts is perpetually prepared, managing container loading onto vessels and overseeing cargo at terminals. We meticulously plan and execute the safe and efficient transportation of your perishable goods, guaranteeing that they reach their destination in the best possible condition. When it comes to reefer cargo, Seagate Logistics sets the standard for reliability and excellence.</p>
            </div>
        </div>
    );
};

export default ReeferCargoComponent;
