import React from 'react';

const Card = ({ imageUrl, title, description }) => (
  <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
    <img className="w-full" src={imageUrl} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);

const CardList = () => {
  const cardsData = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Our Vision',
      description: 'We aim to emerge as the torchbearer in the logistics industry. Our vision is to establish Seagate Logistics as the most grounded logistics company as a trusted partner to all our clients. We envision to surpass our success & customer loyalty level year by year.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Our Policy',
      description: 'We are committed to delivering dependable International Freight Forwarding, Multi-Modal Transport Operations, and NVOCC services that constitute a comprehensive logistics solution designed to meet the distinct requirements of our clients. Our dedication to trustworthiness forms the foundation of our services, actively contributing to the advancement and sustainability of your business.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Our Mission',
      description: 'Our mission is to pioneer the future of logistics by relentlessly pursuing innovative solutions that empower global businesses. We are committed to logistics that transcend expectations, ensuring swift, reliable, and cost-effective connections that drive the world forward with purpose and precision.',
    },
  ];

  return (
    <div className="text-center">
         <h2 className="text-2xl font-bold mb-4">Our Views</h2>
    <div className="flex flex-row justify-center">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default CardList;
