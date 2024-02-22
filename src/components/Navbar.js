import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const servicesMenuRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(prevState => !prevState); // Toggle the menu state
    };

    const handleClickOutside = (event) => {
        if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-xl font-semibold text-gray-800">
                        Atlas Mara Logistics
                    </Link>
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu}
                            className="text-gray-800 focus:outline-none"
                        >
                            {/* Hamburger menu icon */}
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9.293 6.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 8.414l-3.293 3.293a1 1 0 11-1.414-1.414l4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    
                    <div className={`md:flex items-center ${showMenu ? 'block' : 'hidden'}`}>
                        <ul className="md:flex md:space-x-10">
                            <li>
                                <Link to="/" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>About Us</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-800 hover:text-gray-600" onClick={toggleSubMenu}>
                                    Our Services
                                </Link>
                                {showSubMenu && (
                                    <ul className="absolute mt-2 py-2 w-32 bg-white border rounded-lg shadow-xl" ref={servicesMenuRef}>
                                        <li><Link to="/warehousing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setShowSubMenu(false)}>Warehousing</Link></li>
                                        <li><Link to="/airfreight" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setShowSubMenu(false)}>Air Freight</Link></li>
                                        <li><Link to="/seafreight" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setShowSubMenu(false)}>Sea Freight</Link></li>
                                        <li><Link to="/custombrokerage" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setShowSubMenu(false)}>Custom Brokerage</Link></li>
                                        <li><Link to="/vesselchartering" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setShowSubMenu(false)}>Vessel Chartering</Link></li>
                                        <li><Link to="/hazardouscargo" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setShowSubMenu(false)}>Hazardous Cargo</Link></li>
                                        <li><Link to="/reefercargo" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setShowSubMenu(false)}>Reefer Cargo</Link></li>
                                        <li><Link to="/globaltransportation" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setShowSubMenu(false)}>Global Transportation</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
