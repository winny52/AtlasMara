import React from 'react';
import projectCargoImage from '../assets/projectcargo.jpg';

const ProjectCargoComponent = () => {
    return (
        <div className="flex items-center">
            <div className="w-1/3">
                <img src={projectCargoImage} alt="Project Cargo" className="w-full" />
            </div>
            <div className="w-2/3 pl-8">
                <h2 className="text-2xl font-semibold mb-4">Project Cargo</h2>
                <p className="text-gray-700 mb-4">At Project & Energy Services, we excel in delivering comprehensive logistics project management, crafting creative and tailored transport strategies, and leveraging a network of strategically positioned specialists in oversized freight to oversee every aspect of your project. Our experts in Project & Energy Services are dedicated to ensuring the utilization of the most suitable routing and transportation modes while providing you with a detailed understanding of your transportation expenses. Overcoming the challenges of size, weight, and complexity is an everyday achievement for us.</p>
                <p className="text-gray-700">We have established a formidable presence in the realm of Project Cargo Logistics and heavy lift shipments. Our dedicated operations team possesses an in-depth understanding of cargo handling in collaboration with ports, customs, and transportation agencies. We offer innovative Project Cargo Handling solutions and technical engineering services to oversee projects comprehensively from inception to timely delivery of your valuable cargo. Regardless of the shipment’s ultimate destination, our team approaches each consignment with a high degree of customization, meticulously planning and engineering every critical point in the process, including conducting rigging studies to ensure maximum safety throughout lifting procedures.</p>
            </div>
        </div>
    );
};

export default ProjectCargoComponent;
