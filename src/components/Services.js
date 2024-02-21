import React from 'react';
import serviceImage from "../assets/services.jpg";
import Footer from './Footer';

// Individual service card component
const ServiceCard = ({ title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="text-base leading-relaxed">{description}</p>
        </div>
    );
};

// Services page component
const ServicesPage = () => {
    // Sample data for service cards
    const services = [
        {
            title: 'Sea Freight',
            description: 'We provide efficient sea freight solutions tailored to your needs.',
        },
        {
            title: 'Air Freight',
            description: 'Our air freight services ensure fast and reliable delivery of your cargo.',
        },
        {
            title: 'Custom Brokerage',
            description: 'We handle all customs procedures to ensure smooth import and export operations.',
        },
        {
            title: 'Warehousing',
            description: 'Our warehousing solutions are tailored to meet your storage needs.',
        },
        {
            title: 'Global Transportation',
            description: 'We offer global transportation services to ensure timely delivery of your cargo.',
        },
        {
            title: 'Project Cargo',
            description: 'Our project cargo services cater to the specialized needs of large-scale projects.',
        },
        {
            title: 'Hazardous Cargo',
            description: 'We provide specialized handling and transportation for hazardous cargo.',
        },
        {
            title: 'Vessel Chartering',
            description: 'Our vessel chartering services offer flexible solutions for your shipping requirements.',
        },
        {
            title: 'Reefer Cargo',
            description: 'We specialize in temperature-controlled transportation for perishable goods.',
        },
    ];

    return (
        <div>
            <div className="container mx-auto px-4 py-8 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <img src={serviceImage} alt="Services" className="w-full h-auto rounded-md shadow-md" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                        <p className="text-base leading-relaxed mb-6">
                            With a decade of experience and a strong global agent network, we provide a wide range of comprehensive freight forwarding services, ensuring your cargo moves consistently, punctually, safely, and economically.
                        </p>
                        <ul className="list-disc pl-8">
                            {services.map((service, index) => (
                                <li key={index} className="text-base mb-2">{service.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} title={service.title} description={service.description} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServicesPage;
