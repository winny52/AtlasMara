import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showServicesMenu, setShowServicesMenu] = useState(false);

    const handleToggleServicesMenu = () => {
        setShowServicesMenu(!showServicesMenu);
    };

    const handleServiceLinkClick = () => {
        setShowServicesMenu(false); // Close the services menu
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-xl font-semibold text-gray-800">
                        Atlas Mara Logistics
                    </Link>
                    <div className="flex items-center">
                        <ul className="hidden md:flex space-x-10">
                            <li>
                                <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-800 hover:text-gray-600">About Us</Link>
                            </li>
                            <li className="relative">
                                <Link to="/services" className="text-gray-800 hover:text-gray-600 focus:outline-none" onClick={handleToggleServicesMenu}>
                                    Our Services
                                    <svg className={`w-4 h-4 ml-1 ${showServicesMenu ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M13.879 7.293a1 1 0 0 1 1.414 1.414l-4.5 4.5a1 1 0 0 1-1.414 0l-4.5-4.5a1 1 0 1 1 1.414-1.414L10 10.086l3.879-3.879z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                                {showServicesMenu && (
                                    <ul className="absolute mt-2 py-2 w-32 bg-white border rounded-lg shadow-xl">
                                        <li>
                                            <Link to="/warehousing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleServiceLinkClick}>Warehousing</Link>
                                        </li>
                                        <li>
                                            <Link to="/airfreight" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleServiceLinkClick}>Air Freight</Link>
                                        </li>
                                        <li>
                                            <Link to="/seafreight" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleServiceLinkClick}>Sea Freight</Link>
                                        </li>
                                        <li>
                                            <Link to="/custombrokerage" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleServiceLinkClick}>Custom Brokerage</Link>
                                        </li>
                                        <li>
                                            <Link to="/vesselchartering" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleServiceLinkClick}>Vessel Chartering</Link>
                                        </li>
                                        <li>
                                            <Link to="/hazardouscargo" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleServiceLinkClick}>Hazardous Cargo</Link>
                                        </li>
                                        <li>
                                            <Link to="/reefercargo" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleServiceLinkClick}>Reefer Cargo</Link>
                                        </li>
                                        <li>
                                            <Link to="/globaltransportation" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleServiceLinkClick}>Global Transportation</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                        <Link to="/contact" className="hidden md:block text-gray-800 hover:text-gray-600 ml-10">Contact Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
