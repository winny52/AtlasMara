import React from 'react';
import ContactForm from './Contactform';
import backgroundImage from '../assets/conback.jpg'; // Import the background image

const Contact = () => {
  return (
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
        <div className="container mx-auto mt-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Send us your Query :</h2>
              <ContactForm />
            </div>

            {/* Business Details */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

              {/* Location */}
              <p className="text-gray-700 mb-2">
                <strong> Our Locations:</strong> 
                <p>Nairobi, Kenya</p>
                <p>Kampala,Uganda</p>
                Dar Es Salaam,Tanzania
              </p>

             

              {/* Email */}
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> info@atlasmara.com
              </p>

              {/* Phone Numbers */}
              <p className="text-gray-700 mb-2">
                <strong>Phone Numbers:</strong>
                <p> Kenya +254 735 222 222                                             </p>
                                              <p>Uganda +256 776 395 504</p>  
                                                Tanzania +255 757 486 465
              </p>

              {/* Address */}
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> 
                Gateway Mall,Nairobi, Kenya
                <p>Oyster Bay,Dar Es Salaam,Tanzania</p>
                
              </p>
            </div>
          </div>
          
        </div>
        
      </div>
      
  );
};

export default Contact;
