import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  const handleToggleServicesMenu = () => {
    setShowServicesMenu(!showServicesMenu);
  };

  return (
    <nav className="m-5 fixed top-0 right-0 p-4 flex items-center">
      <Link to="/" className="text-black-500 text-2xl font-bold mr-8">
        Home
      </Link>
      <Link to="/About" className="text-black-500 text-2xl font-bold mr-8">
        About Us
      </Link>
      <div className="relative">
        <button onClick={handleToggleServicesMenu} className="text-black-500 text-2xl font-bold mr-8">
          Our Services
        </button>
        {showServicesMenu && (
          <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 px-4">
            <ul>
              <li>
                <Link to="/sea-freight" className="text-black-500 hover:text-blue-500">Sea Freight</Link>
              </li>
              <li>
                <Link to="/air-freight" className="text-black-500 hover:text-blue-500">Air Freight</Link>
              </li>
              <li>
                <Link to="/custom-brokerage" className="text-black-500 hover:text-blue-500">Custom Brokerage</Link>
              </li>
              <li>
                <Link to="/warehousing" className="text-black-500 hover:text-blue-500">Warehousing</Link>
              </li>
              <li>
                <Link to="/global-transportation" className="text-black-500 hover:text-blue-500">Global Transportation</Link>
              </li>
              <li>
                <Link to="/project-cargo" className="text-black-500 hover:text-blue-500">Project Cargo</Link>
              </li>
              <li>
                <Link to="/hazardous-cargo" className="text-black-500 hover:text-blue-500">Hazardous Cargo</Link>
              </li>
              <li>
                <Link to="/vessel-chartering" className="text-black-500 hover:text-blue-500">Vessel Chartering</Link>
              </li>
              <li>
                <Link to="/reefer-cargo" className="text-black-500 hover:text-blue-500">Reefer Cargo</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <Link to="/Contact" className="text-black-500 text-2xl font-bold">
         Contact Us
      </Link>
    </nav>
  );
};

export default Navbar;
