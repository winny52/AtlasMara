import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    // const scrollToTop = () => {
    //     window.scrollTo({ top:   0, behavior: 'smooth' });
    // };

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <img src="https://i.pinimg.com/564x/2f/a1/b0/2fa1b03db70e56041dfeb48d8bd3251d.jpg" alt=" Atlas Mara Logistics Logo" className="h-10 w-auto" />
                    <nav className="flex space-x-4">
                        <ul className="flex space-x-4">
                            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
                            <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
                            <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-500">Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="mt-4">
                    <p className="text-center">&copy; Copyright &nbsp;©&nbsp;   2023 Atlas Mara Logistics. All rights reserved.</p>
                    <p className="text-center mt-2">Our Location:  2nd Floor,Gateway Mall, Nairobi, Kenya</p>
                </div>
                {/* <button onClick={scrollToTop} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Scroll to Top
                </button> */}
            </div>
        </footer>
    );
};

export default Footer;
