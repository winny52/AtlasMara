import React from 'react';
import ContactForm from './Contactform';

const Contact = () => {
  return (
      <div className="container mx-auto mt-10 px-4">
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
              <strong>Location:</strong> Nairobi, Kenya
            </p>

            {/* Timing */}
            <p className="text-gray-700 mb-2">
              <strong>Timing:</strong> Monday to Friday, 9:00 AM to 5:00 PM
            </p>

            {/* Email */}
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> info@seagatelogistic.com
            </p>

            {/* Phone Numbers */}
            <p className="text-gray-700 mb-2">
              <strong>Phone Numbers:</strong> +254 123 456 789, +254 987 654 321
            </p>

            {/* Address */}
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> 123 Main Street, Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>
  );
};

export default Contact;
