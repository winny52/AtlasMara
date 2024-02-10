import React from "react";

// Service component representing an individual service item
const Service = ({ title, description, icon }) => {
    return (
        <div className="service">
            <div className="service-icon">
                <img src={icon} alt={title} />
            </div>
            <div className="service-content">
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>
            </div>
        </div>
    );
};

// ServiceList component rendering a list of services
const ServiceList = ({ services }) => {
    return (
        <div className="service-list">
            {services.map((service, index) => (
                <Service key={index} {...service} />
            ))}
        </div>
    );
};


const servicesData = [
    {
        title: "Warehousing",
        description: "Atlasmara Logistics provides tailored warehousing solutions to boost your business’s productivity and efficiency. With a strategically located 62,000 sq. ft.",
        icon: "path_to_warehousing_icon.jpg",
    },
    {
        title: "Global Transportation",
        description: "At Atlasmara Logistics, our primary objective for door-to-door delivery is to seamlessly collect cargo from the shipper’s location and deliver it ",
        icon: "path_to_global_transportation_icon.jpg",
    },
];

// Main component rendering the ServiceList
const MainComponent = () => {
    return (
        <div className="main-content">
            <h2 className="section-title">Our Services</h2>
            <ServiceList services={servicesData} />
        </div>
    );
};

export default MainComponent;
