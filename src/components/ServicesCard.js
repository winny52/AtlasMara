import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faGlobe, faBox, faShip, faPlane, faKey, faExclamationTriangle, faAnchor, faThermometerHalf } from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ title, description, iconName }) => {
    const icons = {
        "Warehousing": faTruck,
        "Global Transportation": faGlobe,
        "Project Cargo": faBox,
        "Sea Freight": faShip,
        "Air Freight": faPlane,
        "Custom Brokerage": faKey,
        "Hazardous Cargo": faExclamationTriangle,
        "Vessel Chartering": faAnchor,
        "Reefer Cargo": faThermometerHalf,
    };

    const icon = icons[title];

    return (
        <div className="card px-6 py-4 rounded-lg shadow-md mb-4 bg-white"> {/* Added bg-white class here */}
            <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={icon} className="mr-4 text-xl text-blue-500" />
                <div className="font-bold text-xl text-blue-500" style={{ fontSize: "1.5rem" }}>{title}</div>
            </div>
            <p className="text-gray-700 text-base">{description}</p>
        </div>
    );
};

const ServiceCardList = () => {
    const simpleCardsData = [
        { title: "Warehousing", description: "Atlasmara Logistics provides tailored warehousing solutions to boost your business’s productivity and efficiency. With a strategically located 62,000 sq. ft." },
        { title: "Global Transportation", description: "At Atlasmara Logistics, our primary objective for door-to-door delivery is to seamlessly collect cargo from the shipper’s location and deliver it " },
        { title: "Project Cargo", description: "At Project & Energy Services, we excel in delivering comprehensive logistics project management, crafting creative and tailored transport strategies, and " },
        { title: "Sea Freight", description: "With unwavering dedication to precision, reliability, and cost-efficiency, we offer tailored solutions that ensure the smooth flow of your global trade operations." },
        { title: "Air Freight", description: "\n" +
                "At Seagate Logistics Pakistan Pvt. Ltd, we excel in providing top-tier air freight solutions that elevate your business to new heights. " },
        { title: "Custom Brokerage", description: "Atlasmara Logistics  is an authorized customs clearance company in Pakistan, specializing in streamlining the intricate processes" },
        { title: "Hazardous Cargo", description: "With a wealth of expertise and knowledge inherited since our company’s inception, Seagate Logistics has consistently earned" },
        { title: "Vessel Chartering", description: "Atlasmara Logistics provides Vessel Chartering, utilizing our extensive knowledge of ship owners and their fleet capacities by selecting" },
        { title: "Reefer Cargo", description: "Refrigerated cargo logistics is all about precision – Customers need commodity expertise, seamless handovers, flexible processes" },
    ];

    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {simpleCardsData.map((card, index) => (
                    <ServiceCard key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default ServiceCardList;