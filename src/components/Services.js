import React from 'react';
import serviceImage from "../assets/services.jpg"

const Services = () => {
  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="mb-8">
          With a decade of experience and a strong global agent network, we provide a wide range of comprehensive freight forwarding services, ensuring your cargo moves consistently, punctually, safely, and economically.
        </p>

        <ul className="list-disc pl-8">
          <li>Sea Freight</li>
          <li>Air Freight</li>
          <li>Custom Brokerage</li>
          <li>Warehousing</li>
          <li>Global Transportation</li>
          <li>Project Cargo</li>
          <li>Hazardous Cargo</li>
          <li>Vessel Chartering</li>
          <li>Reefer Cargo</li>
        </ul>
      </div>
      <div>
        <img src={serviceImage} alt="Services " className="w-full h-auto mb-8 md:mb-0" />
      </div>
    </div>
  );
};

export default Services;
