import React from 'react';
import ContactForm from './Contactform';

const Contact = () => {
  return (
    <div className="container mx-auto mt-10 flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl">
        {/* Contact Form */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <ContactForm />
        </div>

        {/* Business Details */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">Our Details</h2>

            {/* Location */}
            <p className="text-gray-700 mb-2">
              <strong>Location:</strong> Your Business Location
            </p>

            {/* Timing */}
            <p className="text-gray-700 mb-2">
              <strong>Timing:</strong> Your Business Timing
            </p>

            {/* Email */}
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> your@email.com
            </p>

            {/* Phone Numbers */}
            <p className="text-gray-700 mb-2">
              <strong>Phone Numbers:</strong> +1 123 456 7890, +1 987 654 3210
            </p>

            {/* Address */}
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> Your Business Address
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
