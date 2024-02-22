import React from 'react';

const Card = ({ imageUrl, title, description }) => (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg mx-4 mb-8">
        <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
        <div className="px-6 py-4 bg-white">
            <div className="font-bold text-xl mb-2 text-blue-500">{title}</div> 
            <p className="text-gray-700 text-base">{description}</p>
        </div>
    </div>
);

const CardList = () => {
  const cardsData = [
    {
      imageUrl: 'https://i.pinimg.com/564x/45/55/3d/45553da462098b9ac2a719705695cc6b.jpg',
      title: 'Our Vision',
      description: 'We aim to emerge as the torchbearer in the logistics industry. Our vision is to establish AtlasMara Logistics as the most grounded logistics company as a trusted partner to all our clients. We envision to surpass our success & customer loyalty level year by year.',
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/ed/b6/38/edb638aec68f6861a4001cf3cbbfe7ac.jpg',
      title: 'Our Policy',
      description: 'We are committed to delivering dependable International Freight Forwarding, Multi-Modal Transport Operations, and NVOCC services that constitute a comprehensive logistics solution designed to meet the distinct requirements of our clients. Our dedication to trustworthiness forms the foundation of our services, actively contributing to the advancement and sustainability of your business.',
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/cf/28/92/cf2892cc4b89235a23da1eb2183c9074.jpg',
      title: 'Our Mission',
      description: 'Our mission is to pioneer the future of logistics by relentlessly pursuing innovative solutions that empower global businesses. We are committed to logistics that transcend expectations, ensuring swift, reliable, and cost-effective connections that drive the world forward with purpose and precision.',
    },
  ];

  return (
      <div className="text-center bg-gray-100 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 mx-auto max-w-2xl">Our Views</h2>
        <div className="flex flex-wrap justify-center">
          {cardsData.map((card, index) => (
              <Card key={index} {...card} />
          ))}
        </div>
      </div>
  );
};

export default CardList;
